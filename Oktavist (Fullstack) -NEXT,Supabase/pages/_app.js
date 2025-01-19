import "@/styles/globals.css";
import Themestate from "@/Theme/Themestate";

export default function App({ Component, pageProps }) {
  return (
    <Themestate>
      <Component {...pageProps} />
    </Themestate>
  )

}
