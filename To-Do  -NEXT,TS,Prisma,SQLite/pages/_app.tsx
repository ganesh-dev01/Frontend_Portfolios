import ThemeButton from "@/Components/ThemeButton";
import "@/styles/globals.css";
import ThemeState from "@/Theme/Themestate";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }: AppProps) {
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
