
import { Box, Drawer, DrawerContent, useDisclosure, DrawerCloseButton } from "@chakra-ui/react";
import React from "react";
export default function Layout({ children }) {




  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh">
      <Box ml={{ base: 0, md: 0 }} >
        {children}
      </Box>
    </Box>
  );
}
