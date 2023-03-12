import React from "react";
import Logo from "../Logo";
import { Box, HStack, Icon } from "@chakra-ui/react";
import { CgMenuLeft } from "react-icons/cg";

function HeaderMobile({ onOpen }) {
  return (
    <Box position="fixed" top={0} left={0} bg={"#fff"} zIndex={600} minW="100%">
      <HStack spacing={"25%"}>
        <Icon cursor={"pointer"} as={CgMenuLeft} w={7} h={7} onClick={onOpen} />
        <Logo />
      </HStack>
    </Box>
  );
}

export default HeaderMobile;
