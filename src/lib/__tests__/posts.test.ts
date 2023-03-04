import { getAllPostData, getSortedPageOnePostsData } from "@/lib/posts";

const allPosts = getAllPostData();
const homePagePosts = getSortedPageOnePostsData();

if (allPosts.length) {
  describe("All blog have required info", () => {
    it.each(allPosts)("Should have a valid title", (blog) => {
      expect(blog.title).toBeDefined();
    });

    it.each(homePagePosts)("Page one post should have a date", (blog) => {
      expect(blog.date).toBeDefined();
    });

    it.each(homePagePosts)("Page one post should have a summary", (blog) => {
      expect(blog.summary).toBeDefined();
    });
  });
} else {
  it("Should pass if there are no posts", () => {
    expect(true).toBeTruthy();
  });
}
