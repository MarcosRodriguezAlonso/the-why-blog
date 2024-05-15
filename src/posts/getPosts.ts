import Post from "./types";

const getPosts = async (): Promise<Post[]> => {
  try {
    const response = await fetch(import.meta.env.VITE_API_URL);
    const posts = (await response.json()) as Post[];

    return posts;
  } catch (error) {
    throw new Error("Server failed to load POSTS");
  }
};

export default getPosts;
