import { Post, PostDataWithoutId } from "../posts/types";

export interface PostClientstructure {
  getPost: () => Promise<Post[]>;
  addNewPost: (postData: PostDataWithoutId) => Promise<Post>;
}
