import { Divider, flexbox, Stack } from "@chakra-ui/react";
import React from "react";
import { Flex, Spacer, Icon, HStack, Text, Button } from "@chakra-ui/react";
import { SiChatbot } from "react-icons/si";
import Link from "next/link";
import Navbar from "../Navbar";
import { linkItems } from "../../constants/linkItems";
import SearchBox from "./Shared/SearchBox";
import Logo from "../Logo";
import { AiOutlineUser ,AiOutlineShoppingCart} from "react-icons/ai";

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
                    <Button
                      bg='#03C988'
                      color='#fff'
                      variant='unstyled'
                      p={2}
                      borderRadius="17px">
                      <HStack gap={1}>
                        <Icon as={AiOutlineUser} />
                        <Text fontSize={'sm'}> Giriş Yap</Text>
                      </HStack>

                    </Button>
                    <Button bg='#7c3aed'
                      color='#fff'
                      variant='unstyled'
                      p={2}
                      borderRadius="17px">
                      <HStack gap={1}>
                        <Icon as={AiOutlineShoppingCart} />
                        <Text fontSize={'sm'}>0</Text>
                      </HStack>
                    </Button>
                  </Stack>

                }

              </Flex>
            </HStack>
          </Flex>
        </>
        <Divider />
        <>
          <Flex w={'100%'} h={50} justifyContent='center'>
            {linkItems.map((link, i) => (
              <Navbar key={'eb_' + i} link={link} />
              
            ))}
          </Flex>
        </>
      </Stack>
    </>
  );
}

export default DesktopHeader;
