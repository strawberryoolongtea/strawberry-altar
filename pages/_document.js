import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta
            name="description"
            content="소원을 이루어 주는 나만의 제단 만들기"
          />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta property="og:title" content="소원을 들어줘 My Altar" />
          <meta
            property="og:description"
            content="소원을 이루어 주는 나만의 제단 만들기"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.odd-scythe.com/" />
          <meta property="og:image" content="/title-img.png" />
          <meta
            property="twitter:image"
            content="https://www.odd-scythe.com/title-img.png"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Hahmlet:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="https://use.typekit.net/pdr5lqh.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
