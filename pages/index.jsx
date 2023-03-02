import Head from "next/head";
import React, { Suspense } from "react";
export default function Home() {
  const desc = ``;
 
  const keywords = ``
  return (
    <>
      <Head>
        <title>sayfa adi</title>
      
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Güven Otel" />
        <meta name="twitter:description" content={desc} />

        <meta name="twitter:site" content="@Ilyasbzdmr70" />
        <meta name="og:title" content="Güven Otel" />
        <meta name="og:description" content={desc} />
        <meta name="og:type" content="website" />
        <meta charset="utf-8" />
      
        <meta name="keywords" content={keywords} />

        <meta itemprop="name" content="Güven Otel" />
        <meta itemprop="description" content={desc} />
        <meta name="description" content={desc} />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="Turkish" />
        <meta name="revisit-after" content="3 days" />
        <meta name="author" content="ilyas Bozdemir,bozdemir.ib70@gmail.com" />
        <meta name="publisher" content="ilyas Bozdemir" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <Suspense fallback={<div>Yükleniyor...</div>}>
        
        </Suspense>
      </>
    </>
  );
}
