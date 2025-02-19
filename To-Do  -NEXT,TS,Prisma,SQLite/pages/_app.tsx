import ThemeButton from "@/Components/ThemeButton";
import "@/styles/globals.css";
import ThemeState from "@/Theme/Themestate";
import type { AppProps } from "next/app";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { SessionProvider } from "next-auth/react";
import { useEffect, useState } from "react";
import CustomLoader from "@/Components/CustomLoader";
import { Router } from 'next/router';

function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setLoading(true);
    };

    const handleRouteChangeComplete = () => {
      setLoading(false);
    };
    Router.events.on("routeChangeStart", handleRouteChangeStart);
    Router.events.on("routeChangeComplete", handleRouteChangeComplete);
    Router.events.on("routeChangeError", handleRouteChangeComplete);


    setLoading(false);

    return () => {
      Router.events.off("routeChangeStart", handleRouteChangeStart);
      Router.events.off("routeChangeComplete", handleRouteChangeComplete);
      Router.events.off("routeChangeError", handleRouteChangeComplete);
    };
  }, []);

  return (
    <>
      <ThemeState>
        <SessionProvider session={pageProps.session}>
          <ThemeButton />
          {loading && <CustomLoader />}
          <DndProvider backend={HTML5Backend}>
            <Component {...pageProps} />
          </DndProvider>
        </SessionProvider>
      </ThemeState>
    </>
  );
}

export default App;