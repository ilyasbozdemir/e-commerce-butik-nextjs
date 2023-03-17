import * as React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import theme from "../src/theme";
import { ColorModeScript } from "@chakra-ui/react";
export default class MyDocument extends Document {
  render() {
    const googleSiteVerification = ``
    return (
      <Html lang="tr">
        <Head>
          <meta name="theme-color" content={"#fff"} />
          <meta
            name="google-site-verification"
            content={googleSiteVerification}
          />
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"/>
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

