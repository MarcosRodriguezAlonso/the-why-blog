import { http, HttpResponse } from "msw";
import { mockPosts } from "./posts";
import { Post } from "../posts/types";

const handlers = [
  http.get(`${import.meta.env.VITE_API_URL}/posts`, () => {
    return HttpResponse.json<Post[]>(mockPosts);
  }),
];

export default handlers;
