import Router from "next/router";
import nProgress from "nprogress";
import Head from "next/head";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "../styles/globals.css";
import "../styles/nprogress.css";
import { useRouter } from "next/router";
import { useRef } from "react";
import { Analytics } from "@vercel/analytics/react";
import AppContext from "../context/Appcontext";

Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const ref = useRef<string | null>("/");

  router.events?.on("routeChangeStart", () => {
    ref.current = router.asPath;
  });

  return (
    <AppContext.Provider value={{ prevPath: ref.current }}>
      <Head>
        <title>Hi, I'm Aswin.</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content={"Essays on Design, Life Experiences & Storytelling"}
        />
      </Head>
      <Nav />
      <Component {...pageProps} />
      <Analytics />
      <Footer />
    </AppContext.Provider>
  );
}

export default MyApp;
