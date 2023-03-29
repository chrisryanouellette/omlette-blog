import {
  UseBrowserStorage,
  useBrowserStorage,
} from "@ouellettec/design-system/utils";
import { useMdxContext } from "./Context";

export type PageStorage = { [key: string]: boolean };

export function useReadingList(): UseBrowserStorage<
  PageStorage,
  Partial<PageStorage>
> {
  const { length, slug } = useMdxContext();
  const initialPageStorage: PageStorage = {};
  const pages = [...new Array(length)].map((_, i) => i);
  pages.forEach((page) => (initialPageStorage[page] = false));
  return useBrowserStorage<PageStorage>({
    key: `${slug}-reading-list`,
    initial: initialPageStorage,
  });
}
