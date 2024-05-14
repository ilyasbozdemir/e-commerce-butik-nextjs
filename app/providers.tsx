// app/providers.tsx
"use client";

import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

import { extendTheme } from "@chakra-ui/react";

import { styles } from "../src/foundations/styles";
import { config } from "../src/foundations/config";
import { colors } from "../src/foundations/colors";
import { fonts } from "../src/foundations/fonts";
import { fontSizes } from "../src/foundations/fontSizes";
import { fontWeights } from "../src/foundations/fontWeights";
import { lineHeights } from "../src/foundations/lineHeights";
import { letterSpacings } from "../src/foundations/letterSpacings";
import { breakpoints } from "../src/foundations/breakpoints";
import { space } from "../src/foundations/space";
import { sizes } from "../src/foundations/sizes";
import { zIndices } from "../src/foundations/zIndices";
import { CacheProvider } from "@chakra-ui/next-js";
import { setCookie } from "cookies-next";
import { shadows } from "../src/foundations/shadows";

const theme = extendTheme({
  styles,
  config,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
  breakpoints,
  shadows,
  space,
  sizes,
  zIndices,
});

export default theme;

export function Providers({
  children,
  colorMode,
}: {
  children: React.ReactNode;
  colorMode?: any;
}) {
  return (
    <>
      <CacheProvider>
        <ChakraProvider
          resetCSS
          theme={theme}
          colorModeManager={{
            type: "cookie",
            ssr: true,
            get: (init) => colorMode ?? init,
            set: (value) => {
              setCookie("chakra-ui-color-mode", value);
            },
          }}
        >
          <ColorModeScript
            initialColorMode={theme.config.initialColorMode}
            type="cookie"
          />
          {children}
        </ChakraProvider>
      </CacheProvider>
    </>
  );
}
