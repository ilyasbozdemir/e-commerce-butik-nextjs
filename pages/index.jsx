import React, { Suspense } from "react";
import MetaHead from "../components/MetaHead";
export default function Home() {
  const desc = ``;
  const keywords = ``
  const pageTitle = ``

  return (
    <>
      <>
        <MetaHead
          pageTitle=''
          description={``}
          keywords={``}
        />
      </>
      <>
        <Suspense fallback={<div>Yükleniyor...</div>}>
          <main>
            
          </main>
        </Suspense>
      </>
    </>
  );
}
