import "./CreatePostForm.scss";

const CreatePostForm = (): React.ReactElement => {
  return (
    <form className="form">
      <h2>Create Post</h2>
      <label htmlFor="author" className="form__author">
        Author:{" "}
      </label>
      <input id="author" />
      <label htmlFor="title" className="form__title">
        Title:{" "}
      </label>
      <input id="title" />
      <label htmlFor="content" className="form__content">
        Content:{" "}
      </label>
      <input id="content" />
      <label htmlFor="image" className="form__image">
        Image Url:{" "}
      </label>
      <input id="image" />
      <label htmlFor="alternative-text" className="form__alternative-text">
        Alternative Text:{" "}
      </label>
      <input id="alternative-text" />
      <button className="form__button">👉 Save Post</button>
    </form>
  );
};

export default CreatePostForm;
