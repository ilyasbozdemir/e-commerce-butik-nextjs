import dynamic from 'next/dynamic';
import { Flex, HStack } from "@chakra-ui/react";
import React,{ useState } from "react"
import Logo from "../../Logo";
const SearchBox = dynamic(
  () => import('../Shared/SearchBox'),
  {
    ssr: false,
    loading: () => <Placeholder />
  }
);

function Placeholder() {
  const [showPlaceholder, setShowPlaceholder] = useState(true);

  // Placeholder'da gösterilecek öğeler burada
  return (
    <>
      {showPlaceholder && (
        <div style={{ width: "200px", height: "30px", backgroundColor: "gray", borderRadius: "10px", marginBottom: "10px" }}></div>
      )}
    </>
  )
}
function HeaderBody() {
  const [showPlaceholder, setShowPlaceholder] = useState(true);

  return (
    <>
      <Flex justifyContent={"space-between"}>
        <HStack mx={3}>
          <Logo />
        </HStack>
        <HStack>
          <>
            <>
              {typeof window !== 'undefined' ? (
                <SearchBox />
              ) : (
                <div>Loading...</div>
              )}
            </>
          </>
        </HStack>
        <HStack>
          <Flex>
          integration
          </Flex>
        </HStack>
      </Flex>
    </>
  );
}

export default HeaderBody;
