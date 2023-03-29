export type Blog = {
  id: string;
  favicon: string;
  post: string;
  page: string;
  title: string;
  pageTitle: string;
  allPostTitles: string[];
  index: number;
  length: number;
  content: string;
};

export type PageOneBlog = {
  id: string;
  post: string;
  page: string;
  title: string;
  date: string;
  index: number;
  length: number;
  image: {
    src: string;
    alt: string;
  };
  summary: string;
};
