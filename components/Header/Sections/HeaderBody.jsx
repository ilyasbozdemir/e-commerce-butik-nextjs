import { Flex, HStack } from "@chakra-ui/react";
import React from "react"
import Logo from "../../Logo";
import SearchBox from "../Shared/SearchBox";

function HeaderBody() {
  return (
    <>
      <Flex justifyContent={"space-between"}>
        <HStack mx={3}>
          <Logo />
        </HStack>
        <HStack>
          <>
            <SearchBox />
          </>
        </HStack>
        <HStack>
          <Flex>
            
          </Flex>
        </HStack>
      </Flex>
    </>
  );
}

export default HeaderBody;
