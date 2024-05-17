export interface PostDto {
  id: string;
  title: string;
  author: string;
  date: number;
  content: string;
  imageUrl: string;
  alternativeText: string;
}

export interface Post extends Omit<PostDto, "date"> {
  date: Date;
}

export type PostDataWithoutId = Omit<Post, "id">;
