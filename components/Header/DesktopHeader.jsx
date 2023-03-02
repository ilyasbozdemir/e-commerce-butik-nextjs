import { Divider, Stack } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import HeaderBody from "./Sections/HeaderBody";
import HeaderBottom from "./Sections/HeaderBottom";
import { Flex, Spacer, useDisclosure, Icon, HStack, Text, Button } from "@chakra-ui/react";
import { SiChatbot } from "react-icons/si";
import Link from "next/link";
function DesktopHeader() {
  const _hover = {}
  return (
    <>
      <Stack w={"100%"} px={3} >
        <>
          <Flex
            justifyContent={"flex-start"}
            fontSize={"xs"}
            textAlign="center"
            justifyItems={"center"}
          >
            <HStack _hover={_hover} mx={3} fontWeight={'semibold'} direction={'row'} color='#7c3aed'>
              <Icon as={SiChatbot} fontSize={12} />
              <Link href={'/iletisim'} passHref legacyBehavior>
                <a>Müşteri Hizmetleri</a>
              </Link>
            </HStack>
            <HStack color='gray.500' fontWeight={'semibold'}>
              <Text userSelect={'none'} color={'none'}>
                |
              </Text>
            </HStack>
            <HStack _hover={_hover} mx={3} fontWeight={'semibold'} >
              <Link href={'/hakkimizda'} passHref legacyBehavior>
                <a>Hakkımızda</a>
              </Link>
            </HStack>

            <HStack _hover={_hover} mx={3} fontWeight={'semibold'}
              direction={'row'} >
              {/*<Icon as={SiChatbot} fontSize={12} />*/}
              <Link href={'/yardim'} passHref legacyBehavior>
                <a>Yardım</a>
              </Link>
            </HStack>
            <Spacer />
            <HStack _hover={_hover} fontWeight={'semibold'} mx={3} >
              <Link href={'/kargo-takibi'} passHref legacyBehavior>
                <a>Kargo Takibi</a>
              </Link>
            </HStack>
            <HStack _hover={_hover} fontWeight={'semibold'} mx={3} >
              <Link href={'#'} passHref legacyBehavior>
                <a>Siparişlerim</a>
              </Link>
            </HStack>
            <HStack _hover={_hover} fontWeight={'semibold'} mx={3} >
              <Link href={'#'} passHref legacyBehavior>
                <a>Kampanyalar</a>
              </Link>
            </HStack>
          </Flex>
        </>
        <Divider />
        <HeaderBody />
        <Divider />
        <HeaderBottom />
      </Stack>
    </>
  );
}

export default DesktopHeader;
