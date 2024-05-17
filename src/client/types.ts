import { Post, PostDataWithoutId } from "../posts/types";

export interface PostClientstructure {
  getPosts: () => Promise<Post[]>;
  addNewPost: (postData: PostDataWithoutId) => Promise<Post>;
}
