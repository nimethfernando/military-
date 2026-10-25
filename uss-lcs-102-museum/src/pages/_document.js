import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="64x64" href="/favicon-64x64.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="192x192" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#061021" />
        <meta name="msapplication-TileColor" content="#061021" />

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

