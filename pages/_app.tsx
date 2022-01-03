import "../styles/globals.css";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

// eslint-disable-next-line react/jsx-props-no-spreading
export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
