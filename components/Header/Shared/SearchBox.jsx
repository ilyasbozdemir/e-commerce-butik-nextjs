import { Button, Icon, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import React from "react";
import { FiSearch } from "react-icons/fi";
function SearchBox(props) {
  const [inputData, setInputData] = React.useState('')
  const handleClick = () => setInputData('')

  return (
    <>
      <InputGroup size='md' >
        <Input
          pr='4.5rem'
          type='text'
          placeholder='Ara'
          onChange={(event) => setInputData(event.target.value)}
          value={inputData}
          _focus={{ borderColor: '#7c3aed' }}
        />
        {
          inputData != '' ?
            <>
              <InputRightElement width='4.5rem'>
                <Button variant='unstyled' h='1.75rem' size='sm' onClick={handleClick}>
                  Temizle
                </Button>
              </InputRightElement>
            </>
            :
            <>
            </>
        }

      </InputGroup>
      <Button bg='#7c3aed' variant='unstyled' >
        <Icon as={FiSearch} color={'#fff'} fontSize={'sm'} />
      </Button>
    </ >
  );
}

export default SearchBox