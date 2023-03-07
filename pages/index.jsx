import React, { Suspense } from "react";
import { Box, Stack } from "@chakra-ui/react";
import MetaHead from "../components/MetaHead";
import { useRouter } from "next/router";
import Image from "next/Image";
import HighlightsProducts from "../components/HighlightsProducts";
import BestSellingProducts from "../components/BestSellingProducts";
import SimpleSlider from "../components/SimpleSlider";
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
          <Image
            src={"images/img.png"}
            width={1920}
            height={150}
            draggable={false}
            unoptimized
          />

          <SimpleSlider />

          <Box>
            <HighlightsProducts />
          </Box>

          <Box>
            <BestSellingProducts />
          </Box>
          <Box>
            <Showcase />
          </Box>
        </Stack>
      </>
    </>
  );
}
