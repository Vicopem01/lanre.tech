import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html className="m-0 overflow-x-hidden scroll-smooth p-0">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Fira+Sans+Condensed:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="transition-300 relative min-h-screen m-horizontal overflow-hidden overflow-x-hidden bg-purple p-0 font-firaSans">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
