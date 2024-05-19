import { createContext } from "react";
import PostsContextValue from "./types";

const PostsContext = createContext({} as PostsContextValue);

export default PostsContext;
