import "./CreatePostForm.scss";

const CreatePostForm = (): React.ReactElement => {
  return (
    <form className="form" autoComplete="off">
      <div className="form__group">
        <label htmlFor="author">Author: </label>
        <input className="form__input" id="author" type="text" />
      </div>
      <div className="form__group">
        <label htmlFor="title">Title: </label>
        <input className="form__input" id="title" type="text" />
      </div>
      <div className="form__group">
        <label htmlFor="content" className="form__content">
          Content:
        </label>
        <input className="form__input" id="content" type="text" />
      </div>
      <div className="form__group">
        <label htmlFor="image" className="form__image">
          Image Url:
        </label>
        <input className="form__input" id="image" type="url" />
      </div>
      <div className="form__group">
        <label htmlFor="alternative-text" className="form__alternative-text">
          Alternative Text:{" "}
        </label>
        <input className="form__input" id="alternative-text" type="text" />
      </div>
      <button className="form__button">👉 Save Post</button>
    </form>
  );
};

export default CreatePostForm;
