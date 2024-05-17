import { Post } from "../posts/types";

export const claraMockPost: Post = {
  author: "Clara",
  content: "El ornitorrinco suda leche",
  title: "Porque el ornitorrinco no suda",
  date: new Date(17147515),
  id: "clarapost",
  imageUrl:
    "https://toystnt.com/pictures/750_ef9802ce0ca9857e94067fa9a9ee4c68.jpg",
  alternativeText: "",
};

export const marcosMockPost: Post = {
  author: "Marcos",
  content: "Jugar con canicas",
  date: new Date(17147515),
  title: "Porque las canicas",
  id: "marcospost",
  imageUrl:
    "https://toystnt.com/pictures/750_ef9802ce0ca9857e94067fa9a9ee4c68.jpg",
  alternativeText: "",
};

export const mockPosts: Post[] = [claraMockPost, marcosMockPost];
