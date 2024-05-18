import { http, HttpResponse } from "msw";
import { claraMockPost, mockPosts } from "./posts";
import { Post } from "../posts/types";

const handlers = [
  http.get(`${import.meta.env.VITE_API_URL}/posts`, () => {
    return HttpResponse.json<Post[]>(mockPosts);
  }),
  http.post(`${import.meta.env.VITE_API_URL}/posts`, () => {
    return HttpResponse.json<Post>(claraMockPost);
  }),
];

export default handlers;
