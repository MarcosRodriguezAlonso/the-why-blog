import { Post } from "../posts/types";

export const claraMockPost: Post = {
  author: "Clara",
  content: "El ornitorrinco suda leche",
  title: "Porque el ornitorrinco no suda",
  date: new Date(17147515),
  id: "clarapost",
  imageUrl: "",
  alternativeText: "",
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
