import { cookies } from "next/headers";

import Header from '../components/Header'
import Footer from '../components/Footer'

import { Providers } from "./providers";

export const metadata = {
  title: "",
  description:
    "",
};

export default function RootLayout({
  children,
}) {
  const cookiesList = cookies();
  const colorMode = cookiesList.get("chakra-ui-color-mode");

  return (
    <html lang="tr">
      <head>

      </head>
      <body>
        <Providers colorMode={colorMode?.value}>

        <Header />
          {children}
          <Footer />
        </Providers>



      </body>
    </html>
  );
}
