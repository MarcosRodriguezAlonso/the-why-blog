import { render, screen } from "@testing-library/react";
import { Post } from "../../posts/types";
import PostsList from "./PostsList";

describe("Given the PostList component", () => {
  describe("When it receives a post list with the titles 'Why the platypus' and 'Why the raccoon'", () => {
    const postsList: Post[] = [
      {
        title: "Why the platypus",
        author: "",
        content: "",
        date: new Date(),
        id: "",
        alternativeText: "",
        imageUrl: "",
      },
      {
        title: "Why the raccoon",
        author: "",
        content: "",
        date: new Date(),
        id: "",
        alternativeText: "",
        imageUrl: "",
      },
    ];

    test("Then it shoul show two headings containig 'Why the raccoon'", async () => {
      render(<PostsList postsList={postsList} />);

      const expectedTittle = await screen.findByRole("heading", {
        name: "Why the raccoon?",
      });

      expect(expectedTittle).toBeInTheDocument();
    });

    test("Then it shoul show two headings containig 'Why the platypus'", async () => {
      render(<PostsList postsList={postsList} />);

      const expectedTittle = await screen.findByRole("heading", {
        name: "Why the platypus?",
      });

      expect(expectedTittle).toBeInTheDocument();
    });
  });
});
