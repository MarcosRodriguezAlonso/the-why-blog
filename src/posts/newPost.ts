import { Post, PostDataWithoutId } from "./types";

const newPost = async (postData: PostDataWithoutId): Promise<Post> => {
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
};

export default newPost;
