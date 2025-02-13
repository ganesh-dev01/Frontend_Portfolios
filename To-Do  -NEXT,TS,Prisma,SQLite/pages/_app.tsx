import "@/styles/globals.css";
import { ThemeState } from "@/Theme/Themestate";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import ThemeButton from "@/Components/ThemeButton";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {


  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, []);


  return (
    <>
      <ThemeState>
        <SessionProvider session={pageProps.session}>
          <ThemeButton />
          <Component {...pageProps} />
        </SessionProvider>
      </ThemeState>
    </>
  )

}
