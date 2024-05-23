import { useState } from "react";
import "./CreatePostForm.scss";
import { PostDto } from "../../posts/types";

const CreatePostForm = (): React.ReactElement => {
  const [postData, setPostData] = useState<Omit<PostDto, "date" | "id">>({
    author: "",
    title: "",
    content: "",
    imageUrl: "",
    alternativeText: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setPostData((oldPostData) => {
      return { ...oldPostData, [event.target.id]: event.target.value };
    });

  return (
    <form className="form" autoComplete="off">
      <div className="form__group">
        <label htmlFor="author">Author: </label>
        <input
          value={postData.author}
          onChange={handleChange}
          className="form__input"
          id="author"
          type="text"
        />
      </div>
      <div className="form__group">
        <label htmlFor="title">Title: </label>
        <input
          value={postData.title}
          onChange={handleChange}
          className="form__input"
          id="title"
          type="text"
        />
      </div>
      <div className="form__group">
        <label htmlFor="content" className="form__content">
          Content:
        </label>
        <input
          value={postData.content}
          onChange={handleChange}
          className="form__input"
          id="content"
          type="text"
        />
      </div>
      <div className="form__group">
        <label htmlFor="imageUrl" className="form__image">
          Image Url:
        </label>
        <input
          value={postData.imageUrl}
          onChange={handleChange}
          className="form__input"
          id="imageUrl"
          type="url"
        />
      </div>
      <div className="form__group">
        <label htmlFor="alternativeText" className="form__alternative-text">
          Alternative Text:
        </label>
        <input
          value={postData.alternativeText}
          onChange={handleChange}
          className="form__input"
          id="alternativeText"
          type="text"
        />
      </div>
      <button type="submit" className="form__button">
        👉 Save Post
      </button>
    </form>
  );
};

export default CreatePostForm;
