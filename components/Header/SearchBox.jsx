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
import ReactSearchBox from "react-search-box";

function SearchBox() {
  const inputRef = useRef(null);
  const [data, setData] = React.useState("");
  const [datas, setDatas] = React.useState([
    {
      key: "john",
      value: "John Doe",
    },
    {
      key: "jane",
      value: "Jane Doe",
    },
    {
      key: "mary",
      value: "Mary Phillips",
    },
    {
      key: "robert",
      value: "Robert",
    },
    {
      key: "karius",
      value: "Karius",
    },
  ]);

  const handleClick = () => {
    setData("");
  };
  const searchClick = () => {
    alert("search");
  };

  return (
    <>
      <HStack p={1}>
        <InputGroup size="md">
          <div >

            <Input
              as={ReactSearchBox}
              ref={inputRef}
              pr="5.5rem"
              type={"text"}
              placeholder="ürün, kategorileri ara."
              value={data}
              data={datas}
              onChange={(value) => setData(value)}
            />

          </div>

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
    </>
  );
}

export default SearchBox;
