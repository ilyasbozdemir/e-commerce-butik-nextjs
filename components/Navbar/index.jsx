import React from "react";
import Link from "next/link";
import {
  useDisclosure,
  useColorModeValue,
  Menu,
  MenuItem,
  MenuButton,
  MenuList,
  Text,
} from "@chakra-ui/react";
function Navbar(props) {
  const { label, href, icon, childrens } = props.link;
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Menu isOpen={isOpen} pos={"relative"}>
        <MenuButton
          mx={1}
          py={[1, 2, 2]}
          px={4}
          aria-label={{ label } + " button"}
          fontWeight="400"
          onMouseEnter={onOpen}
          onMouseLeave={onClose}
          onClick={() => { }}
          textTransform="uppercase"
          className={'nav-item'}

        >
          <Text sx={{
            '.nav-item:hover &': {
              borderBottom: "solid",
              borderBottomColor: "#7928CA",
              color: "#7928CA",
            },
          }}>
            {label}
          </Text>


        </MenuButton>
        {childrens.length !== 0 ? (
          <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
            {childrens.map((link, i) => (
              <Link href={link.href} key={i} legacyBehavior>
                <a>
                  <MenuItem
                    key={i}
                    link={link}
                    _hover={{
                      // eslint-disable-next-line react-hooks/rules-of-hooks
                      bg: useColorModeValue("gray.100", "gray.700"),
                      color: "#fff",
                    }}
                    userSelect={"none"}pr
                  >
                    <Text as={"span"}>{link.label}</Text>
                  </MenuItem>
                </a>
              </Link>
            ))}
          </MenuList>
        ) : (
          ""
        )}
      </Menu>
    </>
  );
}

export default Navbar;
