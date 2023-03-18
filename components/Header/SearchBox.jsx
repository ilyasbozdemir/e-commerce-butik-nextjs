import {
  Button,
  Input,
  Icon,
  InputGroup,
  InputRightElement,
  HStack,
} from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import { BiSearch } from "react-icons/bi";
import { MdClose } from "react-icons/md";

function SearchBox({ fromC = "current" }) {
  const inputRef = useRef(null);
  const [data, setData] = React.useState("");
  const handleClick = () => {
    setData("");
  };
  const searchClick = () => {
    alert("search");
  };

  useEffect(() => {
    if (fromC === "mobile-search-button") {
      inputRef.current.focus();
    }
  
  }, []);

  return (
    <HStack p={1}>
      <InputGroup size="md">
        <Input
          ref={inputRef}
          pr="5.5rem"
          type={"text"}
          placeholder="ürün, kategorileri ara."
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
        {data !== "" ? (
          <>
            <InputRightElement>
              <Icon
                as={MdClose}
                size="sm"
                onClick={handleClick}
                cursor={"pointer"}
                _hover={{ color: "red.400" }}
              />
            </InputRightElement>
          </>
        ) : (
          <></>
        )}
      </InputGroup>
      <Button
        borderRadius={"50%"}
        width="45px"
        height="45px"
        bg={"#ECF2FF"}
        color={"#7b61ff"}
        onClick={searchClick}
      >
        <Icon as={BiSearch} />
      </Button>
    </HStack>
  );
}

export default SearchBox;
