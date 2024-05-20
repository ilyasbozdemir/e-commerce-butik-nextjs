import Head from "next/head";
import { Box, Center, useBreakpointValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import CategoryContainer from "../../containers/Category/CategoryContainer";

const categories = [
  {
    id: 1,
    title: "Yeni Gelenler",
    path: "yeni-gelenler",
  },
  {
    id: 2,
    title: "Elbise",
    path: "elbise",
  },
  {
    id: 3,
    title: "Triko",
    path: "triko",
  },
  {
    id: 4,
    title: "İç Giyim",
    path: "ic-giyim",
  },
  {
    id: 5,
    title: "Üst Giyim",
    path: "ust-giyim",
  },
  {
    id: 6,
    title: "Sweatshirt",
    path: "sweatshirt",
  },
  {
    id: 7,
    title: "Tişört",
    path: "tisort",
  },
  {
    id: 8,
    title: "Tunik",
    path: "tunik",
  },
  {
    id: 9,
    title: "Tunik",
    path: "tunik",
  },
  {
    id: 10,
    title: "Bluz",
    path: "bluz",
  },
  {
    id: 11,
    title: "Alt Giyim",
    path: "alt-giyim",
  },
  {
    id: 12,
    title: "Etek",
    path: "etek",
  },
  {
    id: 13,
    title: "Panpathlon",
    path: "panpathlon",
  },
  {
    id: 14,
    title: "Pijama Takımı",
    path: "pijama-takimi",
  },
  {
    id: 15,
    title: "Etek Takımı",
    path: "etek-takimi",
  },
  {
    id: 16,
    title: "Dış Giyim",
    path: "dis-giyim",
  },
  {
    id: 17,
    title: "Yelek",
    path: "yelek",
  },
  {
    id: 18,
    title: "Trençkot",
    path: "trenckot",
  },
  {
    id: 19,
    title: "Kap",
    path: "kap",
  },
  {
    id: 20,
    title: "Kaban",
    path: "kaban",
  },
  {
    id: 21,
    title: "Yağmurluk",
    path: "yagmurluk",
  },
  {
    id: 22,
    title: "Kazak",
    path: "kazak",
  },
  {
    id: 23,
    title: "Takım",
    path: "takim",
  },
  {
    id: 24,
    title: "Hırka",
    path: "hirka",
  },
  {
    id: 25,
    title: "Süveter",
    path: "suveter",
  },
  {
    id: 26,
    title: "Outlet",
    path: "outlet",
  },
  {
    id: 27,
    title: "Kombin",
    path: "kombin",
  },
  {
    id: 28,
    title: "Etekli Kombin",
    path: "etekli-kombin",
  },
  {
    id: 29,
    title: "Pantolonlu Kombin",
    path: "pantolonlu-kombin",
  },
];

  
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

  let category = categories.find(
    (item) => item.path === params.dynamic_category
  );


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

  const paths = categories.map((category) => ({
    params: { dynamic_category: category.path },
  }));
  return {
    paths,
    fallback: false,
  };
}

export default DynamicCategoryPage;
