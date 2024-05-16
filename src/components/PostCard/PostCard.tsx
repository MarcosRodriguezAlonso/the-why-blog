import Post from "../../posts/types";

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps): React.ReactElement => {
  return (
    <article className="post">
      <h2 className="post__title">{post.title}</h2>
      <div className="post__author">{post.author}</div>
      <div className="post__date">{post.date}</div>
      <img className="post__picture" src={post.imageUrl}></img>
      <p className="post__content" max-length="200"></p>
    </article>
  );
};

export default PostCard;
