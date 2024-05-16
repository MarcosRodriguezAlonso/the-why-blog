import { render, screen } from "@testing-library/react";
import PostCard from "./PostCard";
import Post from "../../posts/types";

describe("Given the PostCard component", () => {
  const post: Post = {
    id: "",
    author: "Macario",
    content: "The spider has eight legs because it is a spider.",
    date: new Date(1714751590000),
    title: "Las arañas de ocho patas",
    imageUrl: "imagendearaña.jpg",
    alternativeText: "una araña",
  };

  describe("When it receives post with a title: 'Las arañas de ocho patas'", () => {
    test("Then it should show a heading with a title 'Las arañas de ocho patas'", () => {
      const expectedTitle = /las arañas de ocho patas/i;
      render(<PostCard post={post} />);

      const title = screen.getByRole("heading", {
        name: expectedTitle,
      });

      expect(title).toBeInTheDocument();
    });
  });

  describe("When it receives post with a author: 'Macario'", () => {
    test("Then it should show a text with a author 'Macario'", () => {
      const expectedAuthor = /macario/i;
      render(<PostCard post={post} />);

      const author = screen.getByText(expectedAuthor);

      expect(author).toBeInTheDocument();
    });
  });

  describe("When it receives post with a date: 1714751590000", () => {
    test("Then it should show a date with 'Fri May 03 2024'", () => {
      const expectedDate = "Fri May 03 2024";
      render(<PostCard post={post} />);

      const date = screen.getByText(expectedDate);

      expect(date).toBeInTheDocument();
    });
  });

  describe("When it receives post with a image with a alt: 'una araña'", () => {
    test("Then it should show a image with an alt with 'una araña'", () => {
      const expectedAltText = /una araña/i;
      render(<PostCard post={post} />);

      const image = screen.getByAltText(expectedAltText);

      expect(image).toBeInTheDocument();
    });
  });

  describe("When it receives post with a content with: 'The spider has eight legs because it is a spider. It is a spider because it has eight legs. If it had seven legs, it wouldn't be a spider. If it had nine legs, it wouldn't be a spider. It has eight legs, so it is a spider'", () => {
    test("Then it should show a content with a: 'The spider has eight legs because it is a spider. It is a spider because it has eight legs. If it had seven legs, it wouldn't be a spider. If it had nine legs, it wouldn't be a spider. It has eight legs, so it is a spider'", () => {
      const expectedContent =
        /the spider has eight legs because it is a spider./i;
      render(<PostCard post={post} />);

      const content = screen.getByText(expectedContent);

      expect(content).toBeInTheDocument();
    });
  });
});
