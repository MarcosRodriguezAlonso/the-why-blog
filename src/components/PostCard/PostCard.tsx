import { Post } from "../../posts/types";
import "./PostCard.scss";

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps): React.ReactElement => {
  const contentPreview = post.content.slice(0, 200);

  const formattedDate = post.date.toLocaleDateString("es-ES");

  return (
    <article className="post">
      <h2 className="post__title">{`${post.title}?`}</h2>
      <div className="post__data">
        <img
          className="post__image"
          src={post.imageUrl}
          alt={post.alternativeText}
          width="200"
          height="200"
        />
        <p className="post__content">{contentPreview}</p>
      </div>
      <div className="post__autorship">
        <span className="post__author">{`Author: ${post.author}`}</span>
        <span className="post__date">{`Created on: ${formattedDate}`}</span>
      </div>
    </article>
  );
};

export default PostCard;
