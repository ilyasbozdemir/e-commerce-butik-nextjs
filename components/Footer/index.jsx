import React from "react";
import Logo from "../../components/Logo";
import { useRouter } from "next/router";
import Link from "next/link";
import { useToast } from "@chakra-ui/react";
import { Tooltip } from '@chakra-ui/react'
import {
  Button,
  ButtonGroup,
  Container,
  Divider,
  IconButton,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";

import { FaGithub, FaLinkedin, FaPinterestP, FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";


import iyzicoLogo from "../../assests/iyzico_ile_ode_white.png";
import appStoreBadge from "../../assests/app-store-badge.svg";
import googlePlayBadge from "../../assests/google-play-badge.svg";

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
        _light={{ bg: "blackAlpha.900" }}
        _dark={{ bg: "blackAlpha.900" }}
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
              <Tooltip label="Facebook" aria-label='Facebook' hasArrow placement='top' bg='purple.400'>
                <IconButton
                  aria-label="Facebook"
                  icon={<FaFacebookF fontSize="1.25rem" />}
                  _hover={{ bg: "blue.500", color: " white" }}
                />
              </Tooltip>
              <Tooltip label="Instagram" aria-label='Instagram' hasArrow placement='top' bg='purple.400'>
                <IconButton
                  as="button"
                  aria-label="Instagram"
                  icon={<FaInstagram fontSize="1.25rem" />}
                  _hover={{ bgGradient: "linear(to-r, #833AB4, #FD1D1D, #F56040)", color: " white" }}
                />
              </Tooltip>
              <Tooltip label="Whatsapp" aria-label='Whatsapp' hasArrow placement='top' bg='purple.400' >
                <IconButton
                  as="button"
                  aria-label="Whatsapp"
                  icon={<FaWhatsapp fontSize="1.25rem" />}
                  _hover={{ bg: "#25D366", color: " white" }}
                />
              </Tooltip>

              <Tooltip label="Pinterest" aria-label='Pinterest' hasArrow placement='top' bg='purple.400' >
                <IconButton
                  as="button"
                  aria-label="Pinterest"
                  icon={<FaPinterestP fontSize="1.25rem" />}
                  _hover={{ bg: "#BD081C", color: " white" }}
                />
              </Tooltip>

            </ButtonGroup>
            <Text fontSize="13px">Güvenli Alışveriş</Text>

            <Link href='https://www.iyzico.com/' target={'_blank'} rel="noopener noreferrer" passHref>
              <Image
                src={iyzicoLogo}
                alt="iyzico ile öde logo"
                height={30}
                width={110}
                draggable={false}
              />
            </Link>


          </Stack>

          <Stack
            direction={{
              base: "column",
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
          bg={"blackAlpha.800"}
        >
          <Text textAlign="center" fontSize="sm" color="subtle">
            Bu websitesi
            <Link
              target={'_blank'}
              rel="noopener noreferrer"
              href={'https://github.com/ilyasbozdemir'}
              passHref>
              <>  İlyas Bozdemir</>
            </Link> tarafından geliştirilmiştir.
          </Text>

        </Stack>
      </Container>
    </>
  );
}

export default Footer;
