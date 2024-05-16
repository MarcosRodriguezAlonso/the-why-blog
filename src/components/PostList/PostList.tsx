import { Post } from "../../posts/types";
import PostCard from "../PostCard/PostCard";

interface PostsListProps {
  postList: Post[];
}

const PostList = ({ postList }: PostsListProps): React.ReactElement => {
  return (
    <ul className="posts">
      {postList.map((post) => (
        <li>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
};

export default PostList;
