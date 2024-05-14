import { cookies } from "next/headers";

import Header from '../components/Header'
import Footer from '../components/Footer'
import { Providers } from "./providers";

export const metadata = {
  title: "Bir Saate - Eğitim Videoları Platformu",
  description:
    "Bir Saate, eğitim videolarının bulunduğu interaktif bir platformdur. Alanında uzman eğitmenler tarafından hazırlanan bir saatlik derslerle kendinizi geliştirin ve yeni beceriler edinin.",
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
    
        <Providers colorMode={colorMode?.value}>{children}</Providers>
        
      </body>
    </html>
  );
}
