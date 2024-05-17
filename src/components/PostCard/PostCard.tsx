import { Post } from "../../posts/types";

interface PostCardProps {
  post: Post;
}

const PostsCard = ({ post }: PostCardProps): React.ReactElement => {
  const slicedPostContent = post.content.slice(0, 200);

  const actualDate = new Date(post.date).toDateString();

  return (
    <article className="post">
      <h2 className="post__title">{post.title}</h2>
      <div className="post__author">{post.author}</div>
      <div className="post__date">{actualDate}</div>
      <img
        className="post__image"
        src={post.imageUrl}
        alt={post.alternativeText}
        width="400"
        height="400"
      />
      <p className="post__content">{slicedPostContent}</p>
    </article>
  );
};

export default PostsCard;
