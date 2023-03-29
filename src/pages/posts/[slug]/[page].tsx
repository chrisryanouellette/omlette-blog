import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next";
import Head from "next/head";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { Blog } from "@/types";
import { getAllPostData, getPagePostData } from "@/lib/posts";
import { Header } from "@/components/Header";
import { MDXComponentContext, MdxProvider } from "@/components/posts/Context";
import * as Components from "@/components/MarkdownComponents";

type PostProps = {
  blog: Blog;
  source: MDXRemoteSerializeResult;
};

export default function PostPage({ blog, source }: PostProps): JSX.Element {
  const title = `${blog.title} - Page ${blog.page} of ${blog.length} - Omlette Blogs`;

  const context: MDXComponentContext = {
    title: blog.title,
    slug: blog.post,
    index: blog.index,
    length: blog.length,
    allPostTitles: blog.allPostTitles,
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href={blog.favicon} />
      </Head>
      <Header />
      <MdxProvider {...context}>
        <main className="markdown relative mx-4 sm:mx-8">
          <MDXRemote {...source} components={Components} />
        </main>
      </MdxProvider>
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

export async function getStaticProps({
  params,
}: GetStaticPropsContext<{
  slug: string;
  page: string;
}>): Promise<GetStaticPropsResult<PostProps>> {
  if (!params?.slug || !params.page) {
    return {
      redirect: {
        destination: "/",
        permanent: true,
      },
    };
  }

  const blog = getPagePostData(params.slug, `page.${params.page}`);
  const mdxSource = await serialize(blog.content);
  return {
    props: {
      blog,
      source: mdxSource,
    },
  };
}
