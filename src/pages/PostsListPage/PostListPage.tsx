import postClient from "../../client/PostsClient";
import PostsList from "../../components/PostsList/PostsList";

const post = await postClient.getPosts();

const PostsListPage = (): React.ReactElement => {
  return <PostsList postsList={post} />;
};

export default PostsListPage;
