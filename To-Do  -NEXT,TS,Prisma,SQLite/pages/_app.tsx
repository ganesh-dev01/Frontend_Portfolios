import ThemeButton from "@/Components/ThemeButton";
import "@/styles/globals.css";
import ThemeState from "@/Theme/Themestate";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeState>
        <ThemeButton />
        <Component {...pageProps} />
      </ThemeState>
    </>
  )

}
