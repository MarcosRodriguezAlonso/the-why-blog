import { render, screen } from "@testing-library/react";
import NavigationMenu from "./NavigationMenu";

describe("Given the NavigationMenu component", () => {
  describe("When rendered", () => {
    test("Then it should show a link with 'Add'", () => {
      const expectedLinkText = /create post/i;

      render(<NavigationMenu />);
      const link = screen.getByRole("navigation", { name: expectedLinkText });

      expect(link).toBeInTheDocument();
    });

    test("Then it should show a link with 'List'", () => {
      const expectedLinkText = /posts/i;

      render(<NavigationMenu />);
      const link = screen.getByRole("navigation", { name: expectedLinkText });

      expect(link).toBeInTheDocument();
    });
  });
});
