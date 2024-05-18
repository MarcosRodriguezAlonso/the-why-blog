import { Post, PostDataWithoutId, PostDto } from "../posts/types";
import { PostClientstructure } from "./types";

class PostsClient implements PostClientstructure {
  async getPosts(): Promise<Post[]> {
    try {
      const response = await fetch(
        "https://the-why-blog-api.onrender.com/posts",
      );
      const posts = (await response.json()) as PostDto[];

      return posts.map<Post>((post) => ({
        ...post,
        date: new Date(post.date),
      }));
    } catch (error) {
      throw new Error("Server failed ");
    }
  }

  async addNewPost(postData: PostDataWithoutId): Promise<Post> {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });

      const post = (await response.json()) as PostDto;

      return { ...post, date: new Date(post.date) };
    } catch (error) {
      throw new Error("Failed to create New Post");
    }
  }
}
const postClient = new PostsClient();

export default postClient;
