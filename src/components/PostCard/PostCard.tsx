import { Post } from "../../posts/types";

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps): React.ReactElement => {
  const contentPreview = post.content.slice(0, 200);

  const formattedDate = post.date.toLocaleDateString("es-ES");

  return (
    <article className="post">
      <h2 className="post__title">{post.title}</h2>
      <span className="post__author">{post.author}</span>
      <span className="post__date">{formattedDate}</span>
      <img
        className="post__image"
        src={post.imageUrl}
        alt={post.alternativeText}
        width="400"
        height="400"
      />
      <p className="post__content">{contentPreview}</p>
    </article>
  );
};

export default PostCard;
