import { Button, Icon, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import React from "react";
import { FiSearch } from "react-icons/fi";

function SearchBox() {
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
                <Button variant='unstyled' h='1.75rem' size='sm' onClick={handleClick} borderRadius="20px">
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

SearchBox.getInitialProps = async function () {

  const search_tabs = [
    {
      "position": 1,
      "text": "Finance",
      "link": "https://www.google.com/finance/quote/BTC-USD?sa=X&ved=2ahUKEwjgmtefnbz9AhWFRaQEHX6UB3wQ_AUoAXoECAEQAw"
    },
    {
      "position": 2,
      "text": "News",
      "link": "https://www.google.com/search?q=bitcoin&gl=us&hl=en&source=lnms&tbm=nws&sa=X&ved=2ahUKEwjgmtefnbz9AhWFRaQEHX6UB3wQ_AUoAnoECAEQBA"
    },
    {
      "position": 3,
      "text": "Images",
      "link": "https://www.google.com/search?q=bitcoin&gl=us&hl=en&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjgmtefnbz9AhWFRaQEHX6UB3wQ_AUoA3oECAEQBQ"
    },
    {
      "position": 4,
      "text": "Videos",
      "link": "https://www.google.com/search?q=bitcoin&gl=us&hl=en&source=lnms&tbm=vid&sa=X&ved=2ahUKEwjgmtefnbz9AhWFRaQEHX6UB3wQ_AUoBHoECAEQBg"
    }
  ]
  return {
    searchboxData: search_tabs
  };
};
export default SearchBox