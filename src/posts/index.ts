import { Post } from "./types";

const getPosts = async (): Promise<Post[]> => {
  let posts: Post[];

  try {
    const response = await fetch("https://the-why-blog-api.onrender.com/posts");
    posts = (await response.json()) as Post[];

    return posts;
  } catch (error) {
    posts = [];
  }
  return posts;
};

getPosts;

const posts = await getPosts().catch(() => {
  throw new Error("Server failed to load POSTS");
});

export default posts;
