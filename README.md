# The Omlette Blog

A blog built with Next.JS where Omlette's can write about their journeys.

## Blogging - Getting Started

This section covers how to create a new blog post.

1. Open a new terminal and run. 

   ```yarn dev```
1. Open [`http://localhost:3000/`](`http://localhost:3000/`) in your browser.
1. Create a new folder in the `src/posts` directory with the short name of the blog post.
   
   Ex, `src/posts/my-first-post`
1. Create a file inside that folder called `page.1.md`. [MDX](https://mdxjs.com/docs/using-mdx/) is also supported. 
1. Add the following metadata to the top of the `page.1` file.

   ```
    ---
    title: ""
    date: "00/00/0000"
    summary: ""
    image: "/"
    alt: ""
    ---
   ```
1. You can then begin writing the blog post.
1. For multi page blogs, create a new file called `page.X.md` where the `X` is the page number. 
1. Other pages just need the title in the metadata.

    ```
    ---
    title: ""
    ---
    ```


