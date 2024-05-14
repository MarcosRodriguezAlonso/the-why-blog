import "dotenv/config";

import { Post } from "./types";

const getPosts = async (): Promise<Post[]> => {
  try {
    const response = await fetch(
      import.meta.env.VITE_API_URL ??
        "https://the-why-blog-api.onrender.com/posts",
    );
    const posts = (await response.json()) as Post[];

    return posts;
  } catch (error) {
    throw new Error("Server failed to load POSTS");
  }
};

export default getPosts;
