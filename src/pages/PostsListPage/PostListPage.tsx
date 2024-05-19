import postClient from "../../client/PostsClient";
import PostsList from "../../components/PostsList/PostsList";
import { mockPosts } from "../../mocks/posts";

const post = (await postClient.getPosts()) ?? mockPosts;

const PostsListPage = (): React.ReactElement => {
  return <PostsList postsList={post} />;
};

export default PostsListPage;
