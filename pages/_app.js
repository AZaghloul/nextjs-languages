import "../styles/globals.css";
import { AppWithTranslation } from "next-i18next";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default AppWithTranslation(MyApp);
