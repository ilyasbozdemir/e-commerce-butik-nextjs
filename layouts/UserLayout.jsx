import React, { useState } from "react";

import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import Banner from "../components/Banner";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

import { Box, Drawer,  DrawerOverlay, useDisclosure } from "@chakra-ui/react";

function UserLayout({ children }) {
  const [isMenuButton, setMenuButton] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        minH="100vh"
        zIndex="100"
      >
        <Drawer
          autoFocus={true}
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size="full"
        >  
        <DrawerOverlay />
          < >
            <Sidebar onClose={onClose}/>
          </>
        </Drawer>

        <>
          <Header onOpen={onOpen}  />
          <Box p={3} mt={{ base: 10, md: 0.5 }}>
            {children}
            <ScrollToTop />
          </Box>
          <Footer />
        </>
      </Box>
    </>
  );
}

export default UserLayout;
