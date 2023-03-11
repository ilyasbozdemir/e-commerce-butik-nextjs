import React from "react";
import { Box, Stack } from "@chakra-ui/react";
import MetaHead from "../components/MetaHead";
import { useRouter } from "next/router";
import Image from "next/Image";
import HighlightsProducts from "../components/HighlightsProducts";
import BestSellingProducts from "../components/BestSellingProducts";
import SimpleSlider from "../components/SimpleSlider";
import Story from "../components/Story";
import Showcase from "../components/Showcase";
import Head from "next/head";

export default function HomePage() {


  const initialSiteState = {
    author: ``,
    pageTitle: ``,
    url: ``,
    image: ``,
    imageAlt: ``,
    description: ``,
    name: ``,
    keywords: `xx`,
    publisher: ``,
  };

  const [site, setSite] = React.useState(initialSiteState)
  React.useEffect(() => {
    setSite({
      author: `ilyas Bozdemir,bozdemir.ib70@gmail.com`,
      pageTitle: `Anasayfa | domainname.com`,
      url: `fullUrl`,
      baseUrl: `baseUrl`,
      image: ``,
      imageAlt: `site-logo-png`,
      description: ``,
      name: ``,
      keywords: ``,
      publisher: ``,
    })


  }, [])



  return (
    <>

      <Head>
        <link rel="canonical" href={site.url} />
        <base href={site.baseUrl} />
        <title>{site.pageTitle}</title>
        <meta itemprop="name" content={site.pageTitle} />
        <meta itemprop="description" content={site.description} />
        <meta name="description" content={site.description} />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="Turkish" />
        <meta name="revisit-after" content="1 day" />
        <meta name="keywords" content={site.keywords} />
        <meta name="author" content={site.author || `ilyas Bozdemir,bozdemir.ib70@gmail.com`} />
        <meta name="publisher" content={site.publisher || `ilyas Bozdemir`} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={site.pageTitle} />
        <meta name="twitter:description" content={site.description} />
        <meta name="twitter:site" content="@Ilyasbzdmr70" />

        <meta name="og:title" content={site.pageTitle} />
        <meta name="og:description" content={site.description} />
        <meta name="og:type" content="website" />
      </Head>
      <>
        <Stack as="main" w={"full"} p={2} spacing={2}>
          <Box id="story" as={"section"} >
            <Story />
          </Box>

          <Box id="SimpleSlider" as={"section"}>
            <SimpleSlider />
          </Box>

          <Box zIndex={10} id="BestSellingProducts" as={"section"}>
            <BestSellingProducts />
          </Box>

          <Box zIndex={10} id="HighlightsProducts" as={"section"}>
            <HighlightsProducts />
          </Box>

          <Box zIndex={10} id="Showcase" as={"section"}>
            <Showcase />
          </Box>


          <Box id="image" as={"section"}>

            <Image
              src={"images/img.png"}
              width={1920}
              height={150}
              draggable={false}
              priority={true}
              unoptimized
            />

          </Box>

        </Stack>
      </>
    </>
  );
}
