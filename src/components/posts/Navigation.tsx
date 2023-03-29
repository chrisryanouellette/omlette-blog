import Link from "next/link";
import { useMdxContext } from "./Context";
import { useReadingList } from "./useReadingList";

export function Navigation(): JSX.Element {
  const { index, length, slug } = useMdxContext();
  const storage = useReadingList();

  function handleChangePage(): void {
    const page = index - 1;
    storage.set({ [page.toString()]: true });
  }

  return (
    <nav className="flex">
      {index !== 1 ? (
        <Link href={`/posts/${slug}/${index - 1}`} className="mr-4">
          Previous Page
        </Link>
      ) : null}
      {index !== length ? (
        <Link
          href={`/posts/${slug}/${index + 1}`}
          className="ml-auto md:ml-0"
          onClick={handleChangePage}
        >
          Next Page
        </Link>
      ) : null}
    </nav>
  );
}
