import { Flex, Spacer, useDisclosure, Icon, HStack, Text, Button } from "@chakra-ui/react";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { SiChatbot } from "react-icons/si";
function HeaderTop() {
  const [test, setTest] = useState('xx')

  const _hover = {

  };

  const mailto = "info@eflatunbutik.com";
  const {
    isOpen: isOpenSettingSidebar,
    onOpen: onOpenSettingSidebar,
    onClose: onCloseSettingSidebar,
  } = useDisclosure();

  useEffect(() => {
    console.log('count:', count);
  }, [test]);
  return (
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
  );
}

export default HeaderTop;
