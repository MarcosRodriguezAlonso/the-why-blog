import { Post } from "../posts/types";

export const claraMockPost: Post = {
  author: "Clara",
  content: "El ornitorrinco suda leche",
  title: "Porque el ornitorrinco no suda",
  date: 1,
  id: "clarapost",
};

export const marcosMockPost: Post = {
  author: "Marcos",
  content: "Jugar con canicas",
  date: 1,
  title: "Porque las canicas",
  id: "marcospost",
};

export const mockPosts: Post[] = [claraMockPost, marcosMockPost];
