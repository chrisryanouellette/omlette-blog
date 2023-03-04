export type Blog = {
  id: string;
  post: string;
  page: string;
  title: string;
  index: number;
  length: number;
  content: string;
};

export type PageOneBlog = Blog & {
  date: string;
  image: {
    src: string;
    alt: string;
  };
  summary: string;
};
