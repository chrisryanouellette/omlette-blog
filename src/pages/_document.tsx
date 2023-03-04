import { concat } from "@ouellettec/design-system";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document(): JSX.Element {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-gray-50 sm:bg-slate-200">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
