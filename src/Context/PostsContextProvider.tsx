import { PropsWithChildren } from "react";
import PostsContext from "./PostsContext";
import { mockPosts } from "../mocks/posts";

const PostsContextProvider = ({
  children,
}: PropsWithChildren): React.ReactElement => {
  return (
    <PostsContext.Provider value={{ posts: mockPosts }}>
      {children}
    </PostsContext.Provider>
  );
};

export default PostsContextProvider;
