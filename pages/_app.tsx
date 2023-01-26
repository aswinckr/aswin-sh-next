import Router from "next/router";
import nProgress from "nprogress";
import Head from "next/head";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "../styles/globals.css";
import "../styles/nprogress.css";

Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
         ̰
        <title>Hi, I'm Aswin.</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content={"Essays on Design, Life Experiences & Storytelling"}
        />
      </Head>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
