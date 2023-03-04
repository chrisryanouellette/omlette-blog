import Link from "next/link";

import { PageOneBlog } from "@/types";
import { PostInfo } from "./PostInfo";
import { PostImage } from "./PostImage";

type PostProps = {
  post: PageOneBlog;
};

export function Post({ post }: PostProps): JSX.Element {
  return (
    <article>
      <Link href={`/posts/${post.post}`} className="flex flex-col gap-4">
        {post.image ? (
          <div className="w-full">
            <PostImage alt={post.image.alt} src={post.image.src} />
          </div>
        ) : null}
        <PostInfo title={post.title} date={post.date} summary={post.summary} />
      </Link>
    </article>
  );
}

export function FeaturedPost({ post }: PostProps): JSX.Element {
  return (
    <article>
      <Link
        href={`/posts/${post.post}`}
        className="flex flex-col gap-4 sm:flex-row sm:items-center"
      >
        {post.image ? (
          <div className="w-full basis-3/5">
            <PostImage alt={post.image.alt} src={post.image.src} />
          </div>
        ) : null}
        <div className="basis-2/5">
          <PostInfo
            title={post.title}
            date={post.date}
            summary={post.summary}
          />
        </div>
      </Link>
    </article>
  );
}
