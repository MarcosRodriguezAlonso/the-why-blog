import { Post } from "./types";

const newPost = async (postData: Omit<Post, "id">): Promise<Post> => {
  try {
    const response = await fetch(
      import.meta.env.VITE_API_URL ??
        "https://the-why-blog-api.onrender.com/posts",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      },
    );

    return await response.json();
  } catch (erro) {
    throw new Error("Failed to create New Post");
  }
};

export default newPost;
