import { Post, PostDataWithoutId } from "../posts/types";
import { PostClientstructure } from "./types";

class PostsClient implements PostClientstructure {
  async getPosts(): Promise<Post[]> {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/posts`);
      const posts = (await response.json()) as Post[];

      posts.map((post) => {
        post.date = new Date(post.date);
      });

      return posts;
    } catch (error) {
      throw new Error("Server failed ");
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
const postClient = new PostsClient();

export default postClient;
