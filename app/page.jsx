'use client'

import React from "react";
import { Box, Center, Divider, Flex, Stack, Text } from "@chakra-ui/react";
import HighlightsProducts from "../components/HighlightsProducts";
import BestSellingProducts from "../components/BestSellingProducts";
import SimpleSlider from "../components/SimpleSlider";
import Story from "../components/Story";
import Showcase from "../components/Showcase";
import PaymentInfoBox from "../components/PaymentInfoBox ";
import Banner from "../components/Banner";
import CountdownTimer from "../components/CountdownTimer";

export default function HomePage() {


  return (
    <>

      <>
        <Stack zIndex={10} as="main" w={"full"} spacing={2}>
          <Flex display={{ base: "initial", md: "none" }} w={"100%"}>
            <Box id="Banner" as={"section"}>
              <Banner />
            </Box>
            <Box id="CountdownTimer" as={"section"}>
              <CountdownTimer />
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
