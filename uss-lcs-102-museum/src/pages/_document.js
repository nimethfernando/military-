import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800&family=JetBrains+Mono:wght@500;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="description" content="Official website of the Landing Craft Support Museum aboard the historic WWII gunboat USS LCS(L)(3)-102 'Yankee Dollar' at Mare Island Naval Shipyard, Vallejo, CA." />
      </Head>
      <body className="bg-navy-950 text-slate-100 antialiased selection:bg-gold-400 selection:text-navy-950">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

