import { Box, Flex, HStack, Stack, VStack } from "@chakra-ui/react";
import React from "react";
import Logo from "../Logo";
function Header() {
  return (
    <>
      <Box
        as="header"
        display={"flex"}
        top="0"
        zIndex="250"
        boxShadow={`rgba(0, 0, 0, 0.07) 0px 1px 1px,
                    rgba(0, 0, 0, 0.07) 0px 2px 2px,
                    rgba(0, 0, 0, 0.07) 0px 4px 4px,
                    rgba(0, 0, 0, 0.07) 0px 8px 8px`
                  }
        _light={{ bg: "white" }}
        _dark={{ bg: "blackAlpha.50" }}
      >
        <Flex display={{ base: "none", md: "initial" }} w={"100%"}>
          <Flex justifyContent={"space-between"}>
            <></>
            <></>
            <></>
          </Flex>

          <Flex justifyContent={"space-between"}></Flex>
          <Flex justifyContent={"space-between"}></Flex>
        </Flex>
        <Flex display={{ base: "initial", md: "none" }} w={"100%"}>
          <></>
        </Flex>
      </Box>

      <Stack display={{ base: "initial", md: "none" }} w={"100%"}>
        <>bottom nav</>
      </Stack>
    </>
  );
}

export default Header;
