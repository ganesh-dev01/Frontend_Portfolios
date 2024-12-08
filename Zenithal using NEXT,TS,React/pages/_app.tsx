import Wrapper from "@/Layouts/Wrapper";
import "@/styles/globals.css";
import ThemeState from "@/ThemeContext/ThemeState";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <ThemeState>
        <Wrapper>
          <Component {...pageProps} />
        </Wrapper>
      </ThemeState>

    </div>
  )
}
