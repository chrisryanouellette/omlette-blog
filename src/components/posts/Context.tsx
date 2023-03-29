import { createContext, ReactNode, useContext } from "react";

export type MDXComponentContext = {
  title: string;
  slug: string;
  index: number;
  length: number;
  allPostTitles: string[];
};

const MdxContext = createContext<MDXComponentContext | null>(null);

type MdxProvider = MDXComponentContext & {
  children: ReactNode;
};

export function MdxProvider({ children, ...rest }: MdxProvider): JSX.Element {
  return <MdxContext.Provider value={rest}>{children}</MdxContext.Provider>;
}

export function useMdxContext(): MDXComponentContext {
  const context = useContext(MdxContext);

  if (!context) {
    throw new Error(
      '"useMdxContext" can only be used within a <MdxProvider> component'
    );
  }

  return context;
}
