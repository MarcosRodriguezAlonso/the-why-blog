import { Post, PostDataWithoutId } from "../posts/types";

export const claraMockPostData: PostDataWithoutId = {
  alternativeText: "una persona con el pelo largo",
  imageUrl: "urldeclara",
  author: "Clara",
  title: "Porque el ornitorrinco no suda",
  date: new Date(999999999999),
  content: "El ornitorrinco suda leche",
};

export const claraMockPost: Post = {
  author: "Clara",
  content: "El ornitorrinco suda leche",
  title: "Porque el ornitorrinco no suda",
  date: new Date(999999999999),
  id: "clarapost",
  imageUrl: "urldeclara",
  alternativeText: "una persona con el pelo largo",
};

export const marcosMockPost: Post = {
  author: "Marcos",
  content: "Jugar con canicas",
  date: new Date(17147515),
  title: "Porque las canicas",
  id: "marcospost",
  imageUrl: "",
  alternativeText: "",
};

export const mockPosts: Post[] = [claraMockPost, marcosMockPost];
