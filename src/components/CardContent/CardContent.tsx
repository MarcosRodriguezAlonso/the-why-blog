import Post from "../../posts/types";

interface PostProps {
  post: Post;
}

const PostCard = (props: PostProps): React.ReactElement => {
  return (
    <article className="post">
      <h2 className="post__title">{props.post.title}</h2>
    </article>
  );
};

export default PostCard;
