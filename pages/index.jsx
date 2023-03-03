import { Box, Stack } from "@chakra-ui/react";
import React, { Suspense } from "react";
import MetaHead from "../components/MetaHead";
import { useRouter } from "next/router";
import HighlightsProducts from '../components/HighlightsProducts'
import SimpleSlider from '../components/SimpleSlider'
import BestSellingProducts from '../components/BestSellingProducts'


export default function HomePage() {
  const router = useRouter();
  const [currentUrl, setCurrentUrl] = React.useState(router.asPath);
  const [site, setSite] = React.useState({
    author: "ilyas Bozdemir,bozdemir.ib70@gmail.com",
    title: "Eflatun Butik",
    url: currentUrl,
    image: "/favicon.ico",
    imageAlt: "site-logo-png",
    description:
      `Elbise ,Tesettür Giyim  daha aradığın ve daha fazla indirimli ürün en uygun fiyatlar ve kampanyalarla Eflatun Butik'te.`,
    name: "",
    keywords: ''
  });


  return (
    <>
      <>
        <MetaHead
          pageTitle={site.title}
          description={site.description}
          keywords={site.keywords}
        />
      </>
      <>
        <Suspense fallback={<div>Yükleniyor...</div>}>
          <main>
            
            <Stack as='main' w={"full"} p={2} display={'none'}>

              <Box as={'p'} >IGStory</Box>
              <Box as={'p'} >Highlights</Box>
              <Box as={'p'} >Öne Çıkanlar</Box>
              <Box as={'p'} >Çok Satan Ürünler</Box>
              <Box as={'p'} >Showcases</Box>

            </Stack >

            <Box as='main' w={"full"} p={2}>
              <SimpleSlider />
              <HighlightsProducts />
              <BestSellingProducts/>
            </Box>
          </main>
        </Suspense>
      </>
    </>
  );
}
