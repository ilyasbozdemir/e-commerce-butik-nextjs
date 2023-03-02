import { Flex, HStack, Stack } from "@chakra-ui/react";
import React, { useState, useEffect } from "react"
import Logo from "../../Logo";
import SearchBox from "../Shared/SearchBox";
import { Button } from '@chakra-ui/react'

function HeaderBody() {
  const [searchBoxLoaded, setSearchBoxLoaded] = useState(false);

  return (
    <>
      <Flex justifyContent={"space-between"}>
        <HStack mx={3}>
          <Logo />
        </HStack>
        <HStack>
          <SearchBox />
        </HStack>
        <HStack>
          <Flex>
            {
              <Stack direction='row' spacing={4} align='center'>
                <Button bg='#03C988' color='#fff' variant='ghost'>
                  Button
                </Button>
                <Button bg='#1C82AD' color='#fff' variant='ghost'>
                  Button
                </Button>
              </Stack>
            }


          </Flex>
        </HStack>
      </Flex>
    </>
  );
}

export default HeaderBody;
