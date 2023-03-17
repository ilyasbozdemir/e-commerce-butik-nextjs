import {
  Box,
  Divider,
  Flex,
} from "@chakra-ui/react";

import HeaderTop from "./HeaderTop";
import HeaderBody from "./HeaderBody";
import HeaderBottom from "./HeaderBottom";
import HeaderMobile from "./HeaderMobile";
import Banner from "../Banner";

import BottomNavigation from "../BottomNavigation";
import { useEffect, useState } from "react";

function Header({ onOpen }) {


  return (
    <>
      <Box
        as="header"
        top="0"
        zIndex="250"
        boxShadow={`rgba(0, 0, 0, 0.07) 0px 1px 1px,
                    rgba(0, 0, 0, 0.07) 0px 2px 2px,
                    rgba(0, 0, 0, 0.07) 0px 4px 4px,
                    rgba(0, 0, 0, 0.07) 0px 8px 8px`}
        _light={{ bg: "white" }}
        _dark={{ bg: "blackAlpha.50" }}
        p={2}
    
      >
        <Flex direction={'row'} display={{ base: "none", md: "initial" }} w={"100%"}>

          <Banner />
          <HeaderTop />
          <Divider />
          <HeaderBody />
          <Divider />
          <HeaderBottom />

        </Flex>
        <Flex display={{ base: "initial", md: "none" }} w={"100%"}>
          <HeaderMobile onOpen={onOpen} />
        </Flex>
      </Box>

      <Flex display={{ base: "initial", md: "none" }} w={"100%"}>
        <BottomNavigation />
      </Flex>
    </>
  );
}

export default Header;
