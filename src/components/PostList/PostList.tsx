import { Post } from "../../posts/types";
import PostsCard from "../PostCard/PostCard";

interface PostsListProps {
  postsList: Post[];
}

const PostsList = ({
  postsList: postsList,
}: PostsListProps): React.ReactElement => {
  return (
    <ul className="posts">
      {postsList.map((post) => (
        <li>
          <PostsCard post={post} />
        </li>
      ))}
    </ul>
  );
};

export default PostsList;
