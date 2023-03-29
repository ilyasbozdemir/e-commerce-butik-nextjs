import Head from "next/head";
import axios from "axios";
import { Box, Center, useBreakpointValue } from "@chakra-ui/react";
import absoluteUrl from "next-absolute-url";
import { useEffect, useState } from "react";

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "{myproductionurl}"
    : "http://localhost:3000";

function DynamicCategoryPage({ category }) {
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
        <title>{category.title + " • siteName"}</title>
      </Head>
      <Box as={variants?.isCenter === true ? Box : Center}>
        <Box mt={5} mx={2}></Box>
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

  return {
    props: {
      category,
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch(`${baseUrl}/api/categories`);
  const categories = await res.json();
  const paths = categories.map((category) => ({
    params: { dynamic_category: category.path },
  }));
  return {
    paths, // * önceden sunucuya path'ları temsil eden bir dizi verir.
    fallback: false, // ! eğer verilen path'lerden eşleşen olmazsa hata sayfası fırlatır.
  };
}

export default DynamicCategoryPage;
