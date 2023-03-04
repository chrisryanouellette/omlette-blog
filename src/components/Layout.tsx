import { ReactNode } from "react";
import { Quicksand } from "next/font/google";
import { concat } from "@ouellettec/design-system";

// eslint-disable-next-line new-cap
const robotoMono = Quicksand({ subsets: ["latin"] });

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <div
      className={concat(
        "min-h-screen py-4 sm:mx-4 sm:bg-gray-50 sm:drop-shadow-lg md:mx-8 lg:mx-auto lg:max-w-4xl",
        robotoMono.className
      )}
    >
      {children}
    </div>
  );
}
