import { render, screen } from "@testing-library/react";
import PostsCard from "./PostCard";
import { Post } from "../../posts/types";

describe("Given the PostCard component", () => {
  describe("When rendered", () => {
    test("Then it should show a post with a title 'Las arañas de ocho patas'", () => {
      const expectedTitle = /Las arañas de ocho patas/i;
      const post: Post = {
        author: "",
        content: " ",
        date: 1,
        id: "",
        title: "Las arañas de ocho patas",
      };

      render(<PostsCard post={post} />);

      const title = screen.getByRole("heading", {
        name: expectedTitle,
      });

      expect(title).toBeInTheDocument();
    });
  });
});
