import "./CreatePostForm.scss";

const CreatePostForm = (): React.ReactElement => {
  return (
    <form className="form">
      <div className="form__container" contentEditable="true">
        <h2>Create Post</h2>
        <label htmlFor="author" className="form__author">
          Author:{" "}
        </label>
        <input id="author" name="author" autoFocus={true}></input>
        <label htmlFor="title" className="form__title" autoFocus>
          Title:{" "}
        </label>
        <input id="title" name="title"></input>
        <label htmlFor="content" className="form__content">
          Content:{" "}
        </label>
        <input id="content" name="content"></input>
        <label htmlFor="image" className="form__image">
          Image Url:{" "}
        </label>
        <input id="image" name="image"></input>
        <button onClick={CreatePostForm} className="form__button">
          👉 Submit
        </button>
      </div>
    </form>
  );
};

export default CreatePostForm;
