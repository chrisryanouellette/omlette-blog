import Head from "next/head";
import { GetStaticPropsResult } from "next";
import { concat, Icon } from "@ouellettec/design-system";
import { PageOneBlog } from "@/types";
import { getSortedPageOnePostsData } from "@/lib/posts";
import { Header } from "@/components/Header";
import { FeaturedPost, Post } from "@/components/posts";

type HomeProps = {
  blogs: Readonly<PageOneBlog[]>;
};

export default function Home({ blogs }: HomeProps): JSX.Element {
  const [featured, ...rest] = blogs;

  return (
    <>
      <Head>
        <title>Home - Omlette Blog</title>
        <meta
          name="description"
          content="A blog for omlettes to talk about their journey"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        {!blogs.length ? (
          <div className="mx-4 mt-8 flex flex-col items-center sm:mx-8">
            <Icon name="ri-pencil-fill" />
            <p className="pb-4 text-xl">
              The Omlettes are hard at work writing the first blog!
            </p>
            <p className="text-xl">
              Check back soon to see if there is anything to read.
            </p>
          </div>
        ) : (
          <>
            <div className="mx-4 sm:mx-8">
              <FeaturedPost post={featured} />
            </div>
            <ul className="mt-8 grid grid-cols-1 gap-8 sm:mx-8 sm:grid-cols-2 md:grid-cols-3">
              {rest.map((post, index) => (
                <li
                  key={post.id}
                  className={concat(
                    index !== rest.length - 1 &&
                      "border-b-2 border-slate-200 pb-8 sm:border-b-0 sm:pb-0"
                  )}
                >
                  <div className="mx-4 sm:mx-0">
                    <Post post={post} />
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}
      </main>
    </>
  );
}

export function getStaticProps(): GetStaticPropsResult<HomeProps> {
  const blogs = getSortedPageOnePostsData();
  return {
    props: { blogs },
  };
}
