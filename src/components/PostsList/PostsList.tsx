import { Post } from "../../posts/types";
import PostCard from "../PostCard/PostCard";
import "./PostsList.scss";

interface PostsListProps {
  postsList: Post[];
}

const PostsList = ({
  postsList: postsList,
}: PostsListProps): React.ReactElement => {
  return (
    <ul className="posts">
      {postsList.map((post) => (
        <li key={post.id}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
};

export default PostsList;
