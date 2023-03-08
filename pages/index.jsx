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

export default function HomePage() {
  const router = useRouter();
  const [currentUrl, setCurrentUrl] = React.useState(router.asPath);
  const [site, setSite] = React.useState({
    author: `ilyas Bozdemir,bozdemir.ib70@gmail.com`,
    title: `Anasayfa | domainname.com`,
    url: currentUrl,
    image: "",
    imageAlt: "site-logo-png",
    description: ``,
    name: ``,
    keywords: "",
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
        <Stack as="main" w={"full"} p={2} spacing={3}>

          <Box zIndex={10} id='story' as={'section'} h={50}>
            <Story />
          </Box>

          <Box zIndex={10} id='SimpleSlider' as={'section'}>
            <SimpleSlider />
          </Box>
          <Box zIndex={10} id='image' as={'section'}>
            <Image
              src={"images/img.png"}
              width={1920}
              height={150}
              draggable={false}
              unoptimized
            />
          </Box>


          <Box zIndex={10} id='HighlightsProducts' as={'section'}>
            <HighlightsProducts />
          </Box>

          <Box zIndex={10} id='BestSellingProducts' as={'section'}>
            <BestSellingProducts />
          </Box>
          <Box zIndex={10} id='Showcase' as={'section'}>
            <Showcase />
          </Box>
        </Stack>
      </>
    </>
  );
}
