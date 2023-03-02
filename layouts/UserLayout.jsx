import React from "react";

const Footer = React.lazy(() => import("../components/Footer"));
const ScrollToTop = React.lazy(() => import("../components/ScrollToTop"));
const Header = React.lazy(() => import("../components/Header"));
const Sidebar = React.lazy(() => import("../components/Sidebar"));

import { Box, Drawer, DrawerContent, useDisclosure } from "@chakra-ui/react";

function UserLayout({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box minH="100vh" zIndex="100">
        <Drawer
          autoFocus={true}
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size="xs"
        >
          <DrawerContent>
            <Sidebar onClose={onClose} />
          </DrawerContent>
        </Drawer>

        {/*= Header =*/}
        <Header onOpen={onOpen} />

        <Box>
          <ScrollToTop />
          {/* <CookieContainer />*/}
          {children}
          <Footer />
        </Box>
      </Box>
    </>
  );
}

export default UserLayout;
