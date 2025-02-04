import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Themestate from '@/Theme/Themestate'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Themestate>
        <Component {...pageProps} />
      </Themestate>
    </>
  )
}
