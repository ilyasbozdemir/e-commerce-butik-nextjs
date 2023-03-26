import React from "react";
import { Box, Center, Divider, Flex, Stack, Text } from "@chakra-ui/react";
import MetaHead from "../components/MetaHead";
import { useRouter } from "next/router";
import Image from "next/Image";
import HighlightsProducts from "../components/HighlightsProducts";
import BestSellingProducts from "../components/BestSellingProducts";
import SimpleSlider from "../components/SimpleSlider";
import Story from "../components/Story";
import Showcase from "../components/Showcase";
import Head from "next/head";
import PaymentInfoBox from "../components/PaymentInfoBox ";
import Banner from "../components/Banner";
import CountdownTimer from "../components/CountdownTimer";

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

  const [site, setSite] = React.useState(initialSiteState);
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
    });
  }, []);

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
        <meta
          name="author"
          content={site.author || `ilyas Bozdemir,bozdemir.ib70@gmail.com`}
        />
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
        <Stack zIndex={10} as="main" w={"full"} spacing={2}>
          <Flex display={{ base: "initial", md: "none" }} w={"100%"}>
            <Box id="Banner" as={"section"}>
              <Banner />
            </Box>
            <Box id="CountdownTimer" as={"section"}>
              <CountdownTimer  />
            </Box>
          </Flex>

          <Box
            id="Story"
            as={"section"}
            bg={"blackAlpha.300"}
            borderRadius={"20px"}
          >
            <Flex direction={"column"} justifyContent={"center"} gap={3} py={2}>
              <Center>
                <Text as="h2" fontSize={"semibold"}>
                  SANA ÖZEL KATEGORİLER
                </Text>
              </Center>
              <Story />
            </Flex>
          </Box>
          <Divider />

          <Box id="SimpleSlider" as={"section"} my={40}>
            <SimpleSlider />
          </Box>

          <Box id="BestSellingProducts" as={"section"}>
            <BestSellingProducts />
          </Box>

          <Box id="HighlightsProducts" as={"section"}>
            <HighlightsProducts />
          </Box>

          <Box id="Showcase" as={"section"}>
            <Flex direction={"column"} justifyContent={"center"} gap={3} py={2}>
              <Center>
                <Text as="h2" fontSize={"semibold"}>
                  KATEGORİLER
                </Text>
              </Center>
              <Showcase />
            </Flex>
          </Box>

          <Box id="PaymentInfoBox" as={"section"}>
            <PaymentInfoBox />
          </Box>
        </Stack>
      </>
    </>
  );
}
