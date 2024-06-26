'use client'

import React, { useState } from "react";
import Head from "next/head";

import {
  Box,
  Heading,
  Flex,
  ButtonGroup,
  Button,
  Progress,
} from "@chakra-ui/react";

import ReactFlagsSelect from "react-flags-select";
import Screen1 from "./Screen1";
import Screen2 from "./Screen2";
import Screen3 from "./Screen3";
import Screen4 from "./Screen4";

import ScreenSwitcher from "../../components/ScreenSwitcher";

function InstallPage() {
  const [flagSelected, setFlagSelected] = useState("TR");

  const [step, setStep] = useState(1);

  const [screens, setScreens] = useState([
    {
      step: 1,
      component: <Screen1 />,
    },
    {
      step: 2,
      component: <Screen2 />,
    },
    {
      step: 3,
      component: <Screen3 />,
    },
    {
      step: 4,
      component: <Screen4 />,
    },
  ]);

  const [progress, setProgress] = useState(100);

  return (
    <>
      <Head>
        <title>Kurulum</title>
      </Head>
      <>
        <Box maxW="xl" mx="auto" p={4}>
          <Flex direction={"row"} textAlign="center" gap={10}>
            <Flex direction={"column"} textAlign="center">
              <Heading as="h2" size="lg" mb={4}>
                E-Ticaret Sitesi Kurulum Sihirbazı
              </Heading>

            </Flex>
            <ReactFlagsSelect
              selected={flagSelected}
              onSelect={(code) => setFlagSelected(code)}
              countries={["TR"]}
              placeholder="Dil Seçiniz"
            />
          </Flex>
          <>
            <Progress
              hasStripe
              value={progress}
              size="xs"
              colorScheme="purple"
              isAnimated
            />

            <Flex mt={2} direction={"column"} textAlign="center">
              <ScreenSwitcher step={step} screens={screens} />

              <ButtonGroup mt="5%" w="100%">
                <Flex w="100%" justifyContent="space-between">
                  <Flex>
                    <Button
                      onClick={() => {
                        setStep(step - 1);
                        setProgress(100);
                      }}
                      isDisabled={step === 1}
                      colorScheme="blue"
                      variant="solid"
                      w="7rem"
                      mr="5%"
                    >
                      Geri
                    </Button>
                    <Button
                      w="7rem"
                      isDisabled={step === screens.length - 1}
                      onClick={() => {
                        setStep(step + 1);
                      }}
                      colorScheme="blue"
                      variant="outline"
                    >
                      İleri
                    </Button>
                  </Flex>
                  {step === screens.length - 1 ? (
                    <Button
                      colorScheme="blue"
                      variant="outline"
                    >
                      Kurulumu Tamamla
                    </Button>
                  ) : null}
                </Flex>
              </ButtonGroup>
            </Flex>
          </>
        </Box>
      </>
    </>
  );
}

export default InstallPage;
