export interface Post {
  id: string;
  title: string;
  author: string;
  date: Date;
  content: string;
  imageUrl: string;
  alternativeText: string;
}

export type PostDataWithoutId = Omit<Post, "id">;
