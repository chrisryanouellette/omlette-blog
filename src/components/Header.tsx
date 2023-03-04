import Link from "next/link";

export function Header(): JSX.Element {
  return (
    <header className="mx-4 pb-4 sm:mx-8">
      <Link href="/">
        <h1 className="text-4xl">The Omlette Blog</h1>
      </Link>
    </header>
  );
}
