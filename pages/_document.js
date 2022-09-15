import {Head, Html, Main, NextScript} from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href={
            "https://fonts.googleapis.com/css2?family=La+Belle+Aurore&display=swap"
          }
          rel="stylesheet"
        />
        <link
          href={
            "https://fonts.googleapis.com/css2?family=Amaranth:wght@400;700&family=La+Belle+Aurore&display=swap"
          }
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Amarante&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
