import Head from "next/head";
import { Box, Center, useBreakpointValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import CategoryContainer from "../../containers/Category/CategoryContainer";

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "{myproductionurl}"
    : "http://localhost:3000";

function DynamicCategoryPage({ category, productData }) {
  const variants = useBreakpointValue({
    base: { isCenter: false },
    md: { isCenter: true },
  });

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Head>
        <title>{category.title + " • siteName  "}</title>
      </Head>
      <Box as={variants?.isCenter === true ? Box : Center}>
        <Box mt={2} mx={2}>
          <CategoryContainer
            category={category.title}
            productData={productData}
          />
        </Box>
      </Box>
    </>
  );
}

export async function getStaticProps({ params }) {
  const res = await fetch(`${baseUrl}/api/categories`);
  const categories = await res.json();

  let category = categories.find(
    (item) => item.path === params.dynamic_category
  );

  const res2 = await fetch(`${baseUrl}/api/categories`);

  const productData = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
  ];

  return {
    props: {
      category,
      productData,
    },
    revalidate: 60 * 5, // * 5 dakikada bir önbelleği yeniler.
  };
}

export async function getStaticPaths() {
  const res = await fetch(`${baseUrl}/api/categories`);
  const categories = await res.json();
  const paths = categories.map((category) => ({
    params: { dynamic_category: category.path },
  }));
  return {
    paths,
    fallback: false,
  };
}

export default DynamicCategoryPage;
