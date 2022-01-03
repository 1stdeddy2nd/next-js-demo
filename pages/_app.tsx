import "../styles/globals.css";
import { useEffect } from "react";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

// eslint-disable-next-line react/jsx-props-no-spreading
export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
  }, []);
  return <Component {...pageProps} />;
}
