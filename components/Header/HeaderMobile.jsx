'use client'

import React, { useEffect, useState } from "react";
import Logo from "../Logo";
import { Box, Button, Flex, Icon, Stack, Text } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import { motion, useAnimation } from "framer-motion";

function HeaderMobile({ onOpen }) {
  const [scrolled, setScrolled] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      setScrolled(isScrolled);
      controls.start({
        y: isScrolled ? 0 : -100,
        opacity: isScrolled ? 1 : 0,
        transition: { type: "spring", stiffness: 300, damping: 30 }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  return (
    <>
      <MobileNavbar onOpen={onOpen} scrolled={scrolled} />
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={controls}
        style={{ position: "fixed", width: "100%", top: 0, left: 0, zIndex: 600 }}
      >
        <MobileNavbar onOpen={onOpen} scrolled={scrolled} />
      </motion.div>
    </>
  );
}

const MobileNavbar = ({ onOpen, scrolled }) => {
  const openDrawer = (buttonType) => {
    if (buttonType === "menuButton") {
      onOpen();
    } else if (buttonType === "searchButton") {
      onOpen();
    }
  };

  const boxShadow = `rgba(0, 0, 0, 0.07) 0px 1px 1px,
    rgba(0, 0, 0, 0.07) 0px 2px 2px,
    rgba(0, 0, 0, 0.07) 0px 4px 4px,
    rgba(0, 0, 0, 0.07) 0px 8px 8px`;

  return (
    <Box
      px={2}
      py={3}
      bg={"white"}
      boxShadow={scrolled ? boxShadow : "none"}
      backdropFilter={scrolled ? "blur(5px)" : "none"}
      transition="all 0.2s ease-in-out"
    >
      <Flex direction={"column"}>
        <Flex justifyContent={"space-between"}>
          <Stack
            onClick={() => openDrawer("menuButton")}
            alignItems={"center"}
            cursor="pointer"
            display={"flex !important"}
            direction={"column"}
            pos={"relative"}
            top={"3px"}
            fontWeight={"semibold"}
          >
            <Icon
              pos={"absolute"}
              display={{ base: "flex", md: "none" }}
              variant="ghost"
              aria-label="open menu"
              as={FiMenu}
              bg="transparent"
              w={7}
              h={7}
              left={1}
              top={0}
            />
            <Text pos={"absolute"} as="small" left={'1px'} top={"20px"}>
              Menü
            </Text>
          </Stack>

          <Stack>
            <Logo />
          </Stack>
          <Stack>
            <Button
              color={"#fff"}
              bg={"#DF7861"}
              borderRadius={"50%"}
              width="45px"
              height="45px"
              onClick={() => openDrawer("searchButton")}
            >
              <Icon
                as={BiSearch}
                w={7}
                h={7}
                aria-label={"search button icon"}
              />
            </Button>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
}

export default HeaderMobile;
