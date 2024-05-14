import { render, screen } from "@testing-library/react";
import NavigationMenu from "./NavigationMenu";

describe("Given the NavigationMenu component", () => {
  describe("When rendered", () => {
    test("Then it should show a link with 'Add'", () => {
      const expectedLinkText = "Add";

      render(<NavigationMenu />);
      const link = screen.getByRole("link", { name: expectedLinkText });

      expect(link).toBeInTheDocument();
    });

    test("Then it should show a link with 'List'", () => {
      const expectedLinkText = "List";

      render(<NavigationMenu />);
      const link = screen.getByRole("link", { name: expectedLinkText });

      expect(link).toBeInTheDocument();
    });
  });
});
