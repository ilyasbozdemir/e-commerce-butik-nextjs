import dynamic from "next/dynamic";
import {
  Box,
  Divider,
  Flex,
  Stack,
  Text,
  Icon,
  HStack,
  Skeleton,
  Button,
} from "@chakra-ui/react";
const SearchBox = dynamic(() => import("./SearchBox"), {
  ssr: false,
  loading: () => (
    <Box w="full" position="relative">
      <Skeleton startColor="pink.500" endColor="orange.500" w="full" />
    </Box>
  ),
});

import React from "react";
import Link from "next/link";
import Logo from "../Logo";
import { RiWechat2Line } from "react-icons/ri";
import { SlBasket, SlBasketLoaded } from "react-icons/sl";
import { AiOutlineUser } from "react-icons/ai";

function Header() {
  const [basketItemCount, setBasketItemCount] = React.useState(0);

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
                    rgba(0, 0, 0, 0.07) 0px 8px 8px`}
        _light={{ bg: "white" }}
        _dark={{ bg: "blackAlpha.50" }}
        p={2}
      >
        <Flex display={{ base: "none", md: "initial" }} w={"100%"}>
          <Flex justifyContent={"space-between"} my={2}>
            <HStack>
              <Stack fontWeight={"semibold"} fontSize={12}>
                <Link href="#" passHref>
                  <HStack as="a" spacing={1} direction={"row"}>
                    <Icon as={RiWechat2Line} />
                    <Text>Canlı Destek</Text>
                  </HStack>
                </Link>
              </Stack>

              <Stack fontWeight={"semibold"} fontSize={12}>
                <Link href="#" passHref>
                  <HStack as="a" spacing={1} direction={"row"}>
                    <Text>Hakkımızda</Text>
                  </HStack>
                </Link>
              </Stack>

              <Stack fontWeight={"semibold"} fontSize={12}>
                <Link href="#" passHref>
                  <HStack as="a" spacing={1} direction={"row"}>
                    <Text>Yardım</Text>
                  </HStack>
                </Link>
              </Stack>
            </HStack>
            <HStack>
              <Stack fontWeight={"semibold"} fontSize={12}>
                <Link href="#" passHref>
                  <HStack as="a" spacing={1} direction={"row"}>
                    <Text>Kargo Takibi</Text>
                  </HStack>
                </Link>
              </Stack>
              <Stack fontWeight={"semibold"} fontSize={12}>
                <Link href="#" passHref>
                  <HStack as="a" spacing={1} direction={"row"}>
                    <Text>Siparişlerim</Text>
                  </HStack>
                </Link>
              </Stack>
              <Stack fontWeight={"semibold"} fontSize={12}>
                <Link href="#" passHref>
                  <HStack as="a" spacing={1} direction={"row"}>
                    <Text>Kampanyalar</Text>
                  </HStack>
                </Link>
              </Stack>
            </HStack>
          </Flex>

          <Divider />

          <Flex justifyContent={"space-between"} my={2}>
            <HStack>
              <Logo />
            </HStack>
            <HStack>
              <SearchBox />
            </HStack>

            <HStack gap={2}>
              <Button bg={"#ECF2FF"} color={"#7b61ff"} borderRadius={15}>
                <HStack gap={2}>
                  <Icon as={AiOutlineUser} />
                  <>Giriş Yap</>
                </HStack>
              </Button>
              <Button bg={"#ECF2FF"} color={"#7b61ff"} borderRadius={15}>
                <HStack gap={2}>
                  <Icon
                    as={basketItemCount === 0 ? SlBasket : SlBasketLoaded}
                  />
                  <>{basketItemCount}</>
                </HStack>
              </Button>
            </HStack>
          </Flex>

          <Divider />

          <Flex
            justifyContent={"center"}
            my={1}
            bg={"#865DFF"}
            color={"#fff"}
            p={2}
            borderRadius={15}
          >
            Menüler
          </Flex>
        </Flex>
        <Flex display={{ base: "initial", md: "none" }} w={"100%"}></Flex>
      </Box>

      <Stack display={{ base: "initial", md: "none" }} w={"100%"}>
        <>bottom nav</>
      </Stack>
    </>
  );
}

export default Header;
