// pages/_app.js
import { MainContext } from "../contexts/MainContext";
import { ChakraProvider } from "@chakra-ui/react";
import AdminLayout from "../layouts/AdminLayout";
import UserLayout from "../layouts/UserLayout";
import theme from "../src/theme";
import React from "react";
import { useRouter } from "next/router";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const data = {};
  let Layout;
  const router = useRouter();

  if (router.pathname === "/") {
    Layout = UserLayout;
  } else if (router.pathname.startsWith("/admin")) {
    Layout = AdminLayout;
  } else {
    Layout = UserLayout;
  }


  return (
    <ChakraProvider resetCSS theme={theme}>
      <MainContext.Provider value={data}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MainContext.Provider>
    </ChakraProvider>
  );
}

export default MyApp;
