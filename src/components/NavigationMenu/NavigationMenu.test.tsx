import { render, screen } from "@testing-library/react";
import NavigationMenu from "./NavigationMenu";
import { MemoryRouter } from "react-router-dom";

describe("Given the NavigationMenu component", () => {
  describe("When rendered", () => {
    beforeEach(() => {
      render(
        <MemoryRouter>
          <NavigationMenu />
        </MemoryRouter>,
      );
    });

    test("Then it should show a link with 'Create Post'", () => {
      const expectedLinkText = /create post/i;

      const link = screen.getByRole("link", { name: expectedLinkText });

      expect(link).toBeInTheDocument();
    });

    test("Then it should show a link with 'Posts'", () => {
      const expectedLinkText = /posts/i;

      const link = screen.getByRole("link", { name: expectedLinkText });

      expect(link).toBeInTheDocument();
    });
  });
});
