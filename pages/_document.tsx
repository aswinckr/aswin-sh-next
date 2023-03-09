import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html className="dark">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          ></link>

          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
            rel="stylesheet"
          ></link>
          <link
            href="https://fonts.googleapis.com/css2?family=La+Belle+Aurore"
            rel="stylesheet"
          ></link>
        </Head>
        <body className="dark:bg-black dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;
