import { Html, Head, Main, NextScript } from "next/document";
import Image from "next/image";

export default function Document(): JSX.Element {
  return (
    <Html lang="en">
      <Head />
      <body className="sm:bg-slate-200">
        <div aria-hidden className="fixed h-full w-full">
          <Image
            src="/background.svg"
            className="h-full w-full object-cover"
            alt=""
            width="900"
            height="600"
          />
        </div>
        <div className="fixed h-full w-screen backdrop-blur-sm lg:backdrop-blur-md"></div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
