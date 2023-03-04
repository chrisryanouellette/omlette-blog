import fs from "fs";
import path from "path";
import matter, { GrayMatterFile } from "gray-matter";
import { Blog, PageOneBlog } from "@/types";

export type PostPaths = { post: string; pages: [string, ...Array<string>] };

const dir = process.env.NEXT
  ? path.join(process.cwd(), "src")
  : path.resolve(__dirname, "../");

const postDir = path.join(dir, "posts");

export function getPostPaths(): PostPaths[] {
  const folders = fs
    .readdirSync(postDir)
    .filter((folder) => folder.indexOf(".") !== 0);
  return folders.map((folder) => {
    const allPages = fs.readdirSync(path.join(postDir, folder));
    /*
    Node does not guarantee that the file are returned in any
    order so we sort them here
    */
    const pages = allPages.sort((a, b) => {
      const aIndex = Number(a.replace("page.", "").replace(".md", ""));
      const bIndex = Number(b.replace("page.", "").replace(".md", ""));
      if (aIndex < bIndex) {
        return 1;
      } else {
        return -1;
      }
    });
    const firstPage = pages.pop();
    if (!firstPage) {
      throw new Error(`Folder "${folder}" needs atleast one page`);
    }
    return {
      post: folder,
      pages: [firstPage, ...pages],
    };
  });
}

export function getSinglePagePostPaths(): PostPaths[] {
  return getPostPaths().filter((post) => post.pages.length === 1);
}

export function getMultiPagePostPaths(): PostPaths[] {
  return getPostPaths().filter((post) => post.pages.length > 1);
}

function getMatterResult(post: string, page: string): GrayMatterFile<Buffer> {
  const filePath = path.join(postDir, post, page);
  const contents = fs.readFileSync(filePath);
  /** @TODO Look into matter's types more to remove this any */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return matter<Buffer, any>(contents);
}

function getPostId(post: string, page: string): string {
  return `${post}-${page.replace(/\.md$/, "")}`;
}

function getPostData(
  post: string,
  page: string
): Omit<Blog, "length" | "index"> {
  const id = getPostId(post, page);
  const result = getMatterResult(post, page);

  if (!result.data.title) {
    throw new Error(`Blog post ${post}/${page} is missing a title.`);
  }

  return {
    id,
    post,
    page,
    title: result.data.title,
    content: result.content,
  };
}

function getPageOnePostData(
  post: string,
  page: string
): Omit<PageOneBlog, "length" | "index"> {
  const id = getPostId(post, page);
  const result = getMatterResult(post, page);

  if (!result.data.title || !result.data.date || !result.data.summary) {
    throw new Error(
      `Blog post ${post}/${page} is missing either the title, date, or summary.`
    );
  }

  if (!result.data.image || !result.data.alt) {
    throw new Error(
      `Blog post ${post}/${page} is missing either the image and/or atl text.`
    );
  }

  return {
    id,
    post,
    page,
    title: result.data.title,
    date: result.data.date,
    summary: result.data.summary,
    content: result.content,
    image: {
      src: result.data.image,
      alt: result.data.alt,
    },
  };
}

export function getAllPostData(): Blog[] {
  const multiPagePosts = getPostPaths();
  const posts: Blog[] = [];
  multiPagePosts.forEach((post) => {
    post.pages.forEach((page, index) => {
      const data = getPostData(post.post, page);
      posts.push({
        ...data,
        page,
        index: index + 1,
        length: post.pages.length,
      });
    });
  });

  return posts;
}

export function getPagePostData(folder: string, page: string): Blog {
  const pages = fs.readdirSync(path.join(postDir, folder));
  const index = pages.indexOf(page);
  return {
    ...getPostData(folder, pages.length > 1 ? page : "page.md"),
    page,
    index: index + 1,
    length: pages.length,
  };
}

export function getSortedPageOnePostsData(): PageOneBlog[] {
  const postPaths = getPostPaths();
  const posts = postPaths.map((post) => {
    const data = getPageOnePostData(post.post, post.pages[0]);
    return {
      ...data,
      index: 1,
      page: post.pages[0],
      length: post.pages.length,
    };
  });

  return posts.sort((a, b) => {
    if (new Date(a.date) < new Date(b.date)) {
      return 1;
    } else {
      return -1;
    }
  });
}
