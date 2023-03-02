import React from "react";
import Navbar from "../../Navbar";
import { Flex } from "@chakra-ui/react";

import { linkItems } from "../../../constants/linkItems";
function HeaderBottom() {
  return (
    <>
      <Flex w={'100%'} h={50} justifyContent='center'>
        {linkItems.map((link, i) => (
          <Navbar key={'eb_' + i} link={link} />
        ))}
      </Flex>
    </>
  );
}



export default HeaderBottom;
