import Head from "next/head";
import { categories } from "../constants/categories";
import { Box, Center, useBreakpointValue } from "@chakra-ui/react";
function DynamicCategoryPage({ category }) {
  const variants = useBreakpointValue({
    base: { isCenter: false },
    md: { isCenter: true },
  });
  return (
    <>
      <Head>
        <title>{category.title + " • Eflatun Butik"}</title>
      </Head>
      <Box as={variants?.isCenter === true ? Box : Center}>
        <Box mt={5} mx={2}></Box>
      </Box>
    </>
  );
}
export async function getStaticProps({ params }) {

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
  
  const paths = categories.map((category) => ({
    params: { dynamic_category: category.path },
  }));
  return {
    paths,
    fallback: false,
  };
}

export default DynamicCategoryPage;
