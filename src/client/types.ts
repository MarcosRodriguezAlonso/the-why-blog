import { Post, PostDataWithoutId } from "../posts/types";

export interface PostClientstructure {
  getPost: () => Promise<Post[]>;
  newPost: (postData: PostDataWithoutId) => Promise<Post>;
}
