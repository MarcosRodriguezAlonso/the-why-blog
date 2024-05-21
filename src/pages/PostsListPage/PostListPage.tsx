import { useContext } from "react";
import PostsList from "../../components/PostsList/PostsList";
import PostsContext from "../../Context/PostsContext";

const PostsListPage = (): React.ReactElement => {
  const { posts } = useContext(PostsContext);

  return <PostsList postsList={posts} />;
};

export default PostsListPage;
