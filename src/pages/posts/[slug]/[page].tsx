import Head from "next/head";
import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next";
import { Blog } from "@/types";
import { getAllPostData, getPagePostData } from "@/lib/posts";
import { Markdown } from "@/components/Markdown";
import { Header } from "@/components/Header";

type PostProps = {
  blog: Blog;
};

export default function PostPage({ blog }: PostProps): JSX.Element {
  const title = `${blog.title} - Page ${blog.page} of ${blog.length} - Omlette Blogs`;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <main className="px-4 sm:px-8">
        <Markdown>{blog.content}</Markdown>
      </main>
    </>
  );
}

export function getStaticPaths(): GetStaticPathsResult {
  const posts = getAllPostData();

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.post.toString(),
        page: post.index.toString(),
      },
    })),
    fallback: false,
  };
}

export function getStaticProps({
  params,
}: GetStaticPropsContext<{
  slug: string;
  page: string;
}>): GetStaticPropsResult<PostProps> {
  if (!params?.slug || !params.page) {
    return {
      redirect: {
        destination: "/",
        permanent: true,
      },
    };
  }

  const blog = getPagePostData(params.slug, `page.${params.page}.md`);
  return {
    props: {
      blog,
    },
  };
}
