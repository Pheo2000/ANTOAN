import "@/styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

function MtsTechBlogApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MtsTechBlogApp;
