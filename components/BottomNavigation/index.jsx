import React, { useState as UseState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineFavoriteBorder, MdOutlineManageSearch } from "react-icons/md";
import { RiUser3Line } from "react-icons/ri";
import {
  Flex,
  HStack,
  Icon,
  Tooltip,
  Text,
  Stack,
  VStack,
} from "@chakra-ui/react";

import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";

function BottomNavigation({ onOpen }) {
  //const { cartItems } = useContext(CartContext);
  // const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const cartItemCount = 1;

  return (
    <Flex
      boxShadow="xs"
      maxWidth={"30em"}
      p={3}
      minW="100%"
      pos="fixed"
      bottom={0}
      left={0}
      bg={"#fff"}
      zIndex={500}
      justifyContent={"center"}
      textAlign={"center"}
    >
      <Stack direction={"row"} spacing={[3, 4, 5]}>
        <Tooltip label={"Anasayfa"} placement="top" bg="purple.400" hasArrow>
          <Link href={"/"} passHref>
            <VStack color={"gray.500"}>
              <Icon as={AiOutlineHome} w={6} h={6} />
              <Text fontWeight={"semibold"}>Anasayfa</Text>
            </VStack>
          </Link>
        </Tooltip>

        <Tooltip label={"Favorite"} placement="top" bg="purple.400" hasArrow>
          <Link href={"/favorilerim"} passHref>
            <VStack color={"gray.500"}>
              <Icon as={MdOutlineFavoriteBorder} w={6} h={6} />
              <Text fontWeight={"semibold"}>Favorilerim</Text>
            </VStack>
          </Link>
        </Tooltip>

        <HStack
          spacing={3}
          borderRadius={"16px"}
          bg={"#ECF2FF"}
          color={"#7b61ff"}
          cursor={"pointer"}
          p={3}
        >
          <Icon as={MdOutlineManageSearch} w={6} h={6} onClick={onOpen} />
          <Text
            fontWeight={"bold"}
            userSelect={"none"}
            onClick={onOpen}
            color={"gray.500"}
          >
            Menü
          </Text>
        </HStack>

        <Tooltip label={"Shopping"} placement="top" bg="purple.400" hasArrow>
          <Link href={"/sepetim"} passHref>
            <VStack color={"gray.500"}>
              <Icon as={AiOutlineShopping} w={6} h={6} color={"gray.500"}>
                {cartItemCount > 0 && (
                  <span
                    style={{
                      position: "absolute",
                      top: "-5px",
                      right: "-5px",
                      borderRadius: "50%",
                      backgroundColor: "red",
                      color: "white",
                      padding: "2px 5px",
                      fontSize: "0.8rem",
                    }}
                  >
                    {cartItemCount}
                  </span>
                )}
              </Icon>
              <Text
                fontWeight={"semibold"}
                color={"gray.500"}
              >
                Sepetim
              </Text>
            </VStack>
          </Link>
        </Tooltip>

        <Tooltip label={"User"} placement="top" bg="purple.400" hasArrow>
          <Link href={"/hesabim"} passHref>
            <VStack color={"gray.500"}>
              <Icon as={RiUser3Line} w={6} h={6} />
              <Text fontWeight={"semibold"} >
                Hesabım
              </Text>
            </VStack>
          </Link>
        </Tooltip>
      </Stack>
    </Flex>
  );
}

export default BottomNavigation;
