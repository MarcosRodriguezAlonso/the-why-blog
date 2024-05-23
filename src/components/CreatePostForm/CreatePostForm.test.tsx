import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { NewPostData } from "../../posts/types";
import CreatePostForm from "./CreatePostForm";

describe("Given the  CreatePostForm component", () => {
  describe("When the user fills all the form fields and submits", () => {
    test("Then it should call submitPostData with the newPostData", async () => {
      const user = userEvent;
      const submitPostData = vi.fn();

      const newPostData: NewPostData = {
        alternativeText: "alternativeText",
        author: "Clara",
        content: "content",
        imageUrl: "http://imageUrl.com",
        title: "title",
      };

      render(<CreatePostForm submitPostData={submitPostData} />);

      const author = screen.getByLabelText(/author/i);
      const content = screen.getByLabelText(/content/i);
      const imageUrl = screen.getByLabelText(/image Url/i);
      const title = screen.getByLabelText(/title/i);
      const alternativeText = screen.getByLabelText(/alternative Text/i);

      await user.type(author, newPostData.author);
      await user.type(content, newPostData.content);
      await user.type(imageUrl, newPostData.imageUrl);
      await user.type(title, newPostData.title);
      await user.type(alternativeText, newPostData.alternativeText);

      const submitButton = screen.getByRole("button", {
        name: /save post/i,
      });

      await user.click(submitButton);

      expect(submitPostData).toHaveBeenCalledWith(newPostData);
    });
  });
});
