import type { AppProps } from "next/app";
import { Layout } from "@/components/Layout";

import "@/styles/globals.css";
import "@ouellettec/design-system/build/style.css";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
