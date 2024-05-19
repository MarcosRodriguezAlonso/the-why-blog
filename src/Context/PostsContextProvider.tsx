import { PropsWithChildren, useEffect, useState } from "react";
import PostsContext from "./PostsContext";
import postClient from "../client/PostsClient";
import { Post } from "../posts/types";

const PostsContextProvider = ({
  children,
}: PropsWithChildren): React.ReactElement => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    (async () => {
      setPosts(await postClient.getPosts());
    })();
  }, []);

  return (
    <PostsContext.Provider value={{ posts }}>{children}</PostsContext.Provider>
  );
};

export default PostsContextProvider;
