import store from "@/Redux/store";
import "@/styles/globals.css";
import Themestate from "@/Theme/Themestate";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Themestate>
        <Component {...pageProps} />
      </Themestate>
    </Provider>
  )

}
