import { Post, PostDataWithoutId } from "../posts/types";
import { PostClientstructure } from "./types";

class PostsClient implements PostClientstructure {
  async getPost(): Promise<Post[]> {
    try {
      const response = await fetch(import.meta.env.VITE_API_URL);
      const posts = (await response.json()) as Post[];

      return posts;
    } catch (error) {
      throw new Error("Server failed to load POSTS");
    }
  }

  async addNewPost(postData: PostDataWithoutId): Promise<Post> {
    try {
      const response = await fetch(import.meta.env.VITE_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });

      return await response.json();
    } catch (error) {
      throw new Error("Failed to create New Post");
    }
  }
}

export default PostsClient;
