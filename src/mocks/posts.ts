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
  imageUrl:
    "https://upload.wikimedia.org/wikipedia/commons/c/ca/Clara-campoamor-photo.jpg",
  alternativeText: "clara campoamor ",
};

export const marcosMockPost: Post = {
  author: "Marcos",
  content: "Jugar con canicas",
  date: new Date(999999999999),
  title: "Porque las canicas",
  id: "marcospost",
  imageUrl:
    "https://toystnt.com/pictures/750_ef9802ce0ca9857e94067fa9a9ee4c68.jpg",
  alternativeText: "",
};

export const mockPosts: Post[] = [claraMockPost, marcosMockPost];
