import { useState } from "react";
import "./CreatePostForm.scss";

const CreatePostForm = (): React.ReactElement => {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [alternativeText, setAlternativeText] = useState("");

  return (
    <form className="form" autoComplete="off">
      <div className="form__group">
        <label htmlFor="author">Author: </label>
        <input
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
          className="form__input"
          id="author"
          type="text"
        />
      </div>
      <div className="form__group">
        <label htmlFor="title">Title: </label>
        <input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
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
          value={content}
          onChange={(event) => setContent(event.target.value)}
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
          value={imageUrl}
          onChange={(event) => setImageUrl(event.target.value)}
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
          value={alternativeText}
          onChange={(event) => setAlternativeText(event.target.value)}
          className="form__input"
          id="alternativeText"
          type="text"
        />
      </div>
      <button className="form__button">👉 Save Post</button>
    </form>
  );
};

export default CreatePostForm;
