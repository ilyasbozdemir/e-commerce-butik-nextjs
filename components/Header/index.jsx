import { Box, Stack } from "@chakra-ui/react";
import React from "react";
import MobileHeader from "./MobileHeader";
import DesktopHeader from "./DesktopHeader";
import BottomNavigation from "../BottomNavigation";
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
                    rgba(0, 0, 0, 0.07) 0px 16px 16px`}
        _light={{ bg: "white" }}
        _dark={{ bg: "blackAlpha.50" }}
      >
        <Stack display={{ base: "none", md: "initial" }} w={"100%"}>
          <DesktopHeader />
        </Stack>
        <Stack display={{ base: "initial", md: "none" }} w={"100%"}>
          <MobileHeader />
        </Stack>
      </Box>
      <Stack display={{ base: "initial", md: "none" }} w={"100%"}>
        <BottomNavigation />
      </Stack>
    </>
  );
}

export default Header;
