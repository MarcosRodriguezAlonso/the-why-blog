import { render, screen } from "@testing-library/react";
import { Post } from "../../posts/types";
import PostCard from "./PostCard";

describe("Given the PostCard component", () => {
  const post: Post = {
    id: "",
    author: "Macario",
    content:
      "The spider has eight legs because it is a spider. It is a spider because it has eight legs. If it had seven legs, it wouldn't be a spider. If it had nine legs, it wouldn't be a spider. It has eight le",
    date: new Date(1714751590000),
    title: "Las arañas de ocho patas",
    imageUrl: "imagendearaña.jpg",
    alternativeText: "una araña",
  };

  describe("When it receives a post with the title: 'Las arañas de ocho patas'", () => {
    test("Then it should show a heading with a title 'Las arañas de ocho patas'", () => {
      const expectedTitle = /las arañas de ocho patas/i;

      render(<PostCard post={post} />);

      const title = screen.getByRole("heading", {
        name: expectedTitle,
      });

      expect(title).toBeInTheDocument();
    });
  });

  describe("When it receives a post with 'Macario'", () => {
    test("Then it should show a text with a'Macario'", () => {
      const expectedAuthor = /author: macario/i;

      render(<PostCard post={post} />);

      const author = screen.getByText(expectedAuthor);

      expect(author).toBeInTheDocument();
    });
  });

  describe("When it receives a post with a date:'3/5/2024' ", () => {
    test("Then it should show a date with '3/5/2024'", () => {
      const expectedDate = "Created on: 3/5/2024";

      render(<PostCard post={post} />);

      const date = screen.getByText(expectedDate);

      expect(date).toBeInTheDocument();
    });
  });

  describe("When it receives a post with an image with the alternative text: 'una araña'", () => {
    test("Then it should show an image with the alternative text 'una araña'", () => {
      const expectedAlternativeText = /una araña/i;

      render(<PostCard post={post} />);

      const image = screen.getByAltText(expectedAlternativeText);

      expect(image).toBeInTheDocument();
    });
  });

  describe("When it receives a post with a content with: 'The spider has eight legs because it is a spider. It is a spider because it has eight legs. If it had seven legs, it wouldn't be a spider. If it had nine legs, it wouldn't be a spider. It has eight legs, so it is a spider'", () => {
    test("Then it should show the first 200 characters of the content: 'The spider has eight legs because it is a spider. It is a spider because it has eight legs. If it had seven legs, it wouldn't be a spider. If it had nine legs, it wouldn't be a spider. It has eight legs, so it is a spider'", () => {
      const expectedContent =
        /the spider has eight legs because it is a spider. It is a spider because it has eight legs. If it had seven legs, it wouldn't be a spider. If it had nine legs, it wouldn't be a spider. It has eight le/i;

      render(<PostCard post={post} />);

      const content = screen.getByText(expectedContent);

      expect(content).toBeInTheDocument();
    });
  });
});
