export interface Post {
  id: string;
  title: string;
  author: string;
  date: number;
  content: string;
}

export type PostDataWithoutId = Omit<Post, "id">;
