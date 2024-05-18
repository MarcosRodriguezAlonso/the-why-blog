import PostsList from "../../components/PostsList/PostsList";
import { mockPosts } from "../../mocks/posts";

const PostsListPage = (): React.ReactElement => {
  return <PostsList postsList={mockPosts} />;
};

export default PostsListPage;
