import { Divider, Stack } from "@chakra-ui/react";
import React from "react";
import HeaderBody from "./Sections/HeaderBody";
import HeaderBottom from "./Sections/HeaderBottom";
import HeaderTop from "./Sections/HeaderTop";

function DesktopHeader() {
  return (
    <>
      <Stack w={"100%"} px={3} >
        <HeaderTop />
        <Divider />
        <HeaderBody />
        <Divider />
        <HeaderBottom />
      </Stack>
    </>
  );
}

export default DesktopHeader;
