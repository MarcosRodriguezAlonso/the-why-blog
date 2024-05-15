import Post from "../../posts/types";

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps): React.ReactElement => {
  return (
    <article className="post">
      <h2 className="post__title">{post.title}</h2>
    </article>
  );
};

export default PostCard;
