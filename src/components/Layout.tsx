import { ReactNode } from "react";
import { Quicksand } from "next/font/google";
import { concat } from "@ouellettec/design-system/utils";

// eslint-disable-next-line new-cap
const robotoMono = Quicksand({ subsets: ["latin"] });

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <div
      className={concat(
        "relative z-10 min-h-screen bg-gray-50 py-4 sm:mx-4 sm:drop-shadow-lg md:mx-8 lg:mx-auto lg:max-w-4xl",
        robotoMono.className
      )}
    >
      {children}
    </div>
  );
}
