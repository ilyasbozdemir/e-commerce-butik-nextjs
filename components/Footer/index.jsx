/* eslint-disable @next/next/no-img-element */
import React from "react";
import Logo from "../../components/Logo";
import { useRouter } from "next/router";
import Link from "next/link";
import { useToast } from "@chakra-ui/react";

import {
  Button,
  ButtonGroup,
  Container,
  Divider,
  IconButton,
  Input,
  Stack,
  Text,
  Box,
} from "@chakra-ui/react";

import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

import iyzicoLogo from "../../assests/iyzico_ile_ode_white.png";
import Image from "next/image";

function Footer() {
  const router = useRouter();

  const [email, setEmail] = React.useState("");

  function handleInputChange(e) {
    setEmail(e.target.value);
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    toast({
      title: "Abone olundu.",
      status: "success",
      duration: 9000,
      isClosable: true,
      position: "top-right",
    });

    setEmail("");
  }

  React.useEffect(() => { }, []);
  const toast = useToast();
  return (
    <>
      <Container
        pos={"relative"}
        zIndex={150}
        as="footer"
        maxW={"container.lg"}
        color={"white"}
        _light={{ bg: "gray.700" }}
        _dark={{ bg: "gray.700" }}
        marginTop={10}
      >
        <Divider marginBottom={3} />
        <Stack
          spacing="8"
          direction={{
            base: "column",
            md: "row",
          }}
          justify="space-between"
          py={{
            base: "8",
            md: "12",
          }}
        >
          <Stack align="center" justifyContent={"center"} ml={10} mr={10}>
            <Logo />

            <Text color="muted.200">En Trend Kadın Giyim</Text>

            <ButtonGroup variant="ghost">
              <IconButton
                aria-label="Facebook"
                icon={<FaFacebook fontSize="1.25rem" />}
                _hover={{ bg: "blue.500", color: " white" }}
              />

              <IconButton
                as="button"
                aria-label="Instagram"
                icon={<FaInstagram fontSize="1.25rem" />}
                _hover={{ bg: "pink.500", color: " white" }}
              />
            </ButtonGroup>
            <Text fontSize="13px">Güvenli Alışveriş</Text>
            <Image
              src={iyzicoLogo}
              alt="iyzico ile öde logo"
              height={30}
              width={110}
              draggable={false}
            />
          </Stack>

          <Stack
            direction={{
              base: "column-reverse",
              md: "column",
              lg: "row",
            }}
            spacing={{
              base: "12",
              md: "8",
            }}
          >
            <Stack direction="row" spacing="2">
              <Stack spacing="2" minW="36" flex="1">
                <Text fontWeight="semibold" fontSize={18}>
                  Hesabım
                </Text>
                <Stack spacing="2" shouldWrapChildren>

                  <Link href="/hesabim">
                    <Button variant="link" color="white" fontSize={[10, 13]}>
                      Hesabım
                    </Button>
                  </Link>
                  <Link href="/sepetim">
                    <Button variant="link" color="white" fontSize={[10, 13]}>
                      Alışveriş Sepetim
                    </Button>
                  </Link>
                  <Link href="/favorilerim">
                    <Button variant="link" color="white" fontSize={[10, 13]}>
                      Favorilerim
                    </Button>
                  </Link>
                </Stack>
              </Stack>
              <Stack spacing="2" minW="36" flex="1">
                <Text fontSize={18} fontWeight="semibold">
                  Sözleşmeler
                </Text>
                <Stack spacing="2" shouldWrapChildren>
                  <Link href="/mesafeli-satis-sozlesmesi">
                    <Button variant="link" color="white" fontSize={[10, 13]}>
                      Mesafeli Satış Sözleşmesi
                    </Button>
                  </Link>
                  <Link href="/uyelik-sozlesmesi">
                    <Button variant="link" color="white" fontSize={[10, 13]}>
                      Üyelik Sözleşmesi
                    </Button>
                  </Link>

                  <Link href="/cerez-politikasi">
                    <Button variant="link" color="white" fontSize={[10, 13]}>
                      Çerez Politikası
                    </Button>
                  </Link>
                  <Link href="/gizlilik-sozlesmesi">
                    <Button variant="link" color="white" fontSize={[10, 13]}>
                      Gizlilik Sözleşmesi
                    </Button>
                  </Link>
                  <Link href="/kullanim-kosullari">
                    <Button variant="link" color="white" fontSize={[10, 13]}>
                      Kullanım Koşulları
                    </Button>
                  </Link>
                </Stack>
              </Stack>
            </Stack>
            <Stack spacing="4">
              <Text fontSize={18} fontWeight="semibold">
                Bizden Haberler
              </Text>

              <Text as="div">
                Kampanya ve Fırsatlarımızdan İlk Siz Haberdar Olun!
              </Text>
              <form onSubmit={handleFormSubmit}>
                <Stack
                  spacing="4"
                  direction={{
                    base: "column",
                    sm: "row",
                  }}
                  maxW={{
                    lg: "360px",
                  }}
                >
                  <Input
                    placeholder="E-mail adresini giriniz"
                    type="email"
                    value={email}
                    onChange={handleInputChange}
                    required
                  />

                  <Button color="black" type="submit" flexShrink={0}>
                    Abone ol
                  </Button>
                </Stack>
              </form>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          justify="center"
          direction={{
            base: "row",
            md: "row",
          }}
          align="center"
        >
          <Text fontSize="sm" color="subtle">
            &copy; {new Date().getFullYear() + " "}
            Eflatun Butik. Tüm Hakları Saklıdır..
          </Text>
        </Stack>

        <Divider orientation="horizontal" />
        <Stack
          justify="flex-end"
          direction={{
            base: "column",
            md: "row",
          }}
          align="center"
        >
          <Text textAlign="center" fontSize="sm">
            Bu websitesi İlyas Bozdemir tarafından geliştirilmiştir.
          </Text>
          <ButtonGroup>
            <IconButton
              as="i"
              aria-label="Github"
              icon={<FaGithub fontSize="1.25rem" />}
              _hover={{ bg: "white", color: "black" }}
              bg={"transparent"}
            />

            <IconButton
              as="i"
              aria-label="Instagram"
              icon={<FaInstagram fontSize="1.25rem" />}
              _hover={{ bg: "pink.500", color: " white" }}
              bg={"transparent"}
            />

            <IconButton
              as="i"
              aria-label="Linkedin"
              icon={<FaLinkedin fontSize="1.25rem" />}
              _hover={{ bg: "blue.500", color: " white" }}
              bg={"transparent"}
            />
          </ButtonGroup>
          <Box height={50} display={{ base: "block", md: "none" }}></Box>
        </Stack>
      </Container>
    </>
  );
}

export default Footer;
