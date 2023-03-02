import React from "react";

import { Box, Text } from "@chakra-ui/react";

import Link from "next/link";

function Logo() {
  return (
    <>
      <>
        <Box>
          <Link href="/" legacyBehavior>
            <a>
              <Text
                bgGradient="linear(to-l, #645CBB,#4E31AA)"
                bgClip="text"
                fontSize="3xl"
                fontWeight="extrabold"
                userSelect={"none"}
              >
                eflatunbutik
              </Text>
            </a>
          </Link>
        </Box>
      </>
    </>
  );
}

export default Logo;
