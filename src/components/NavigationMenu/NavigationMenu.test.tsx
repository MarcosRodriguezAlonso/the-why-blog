import { render, screen } from "@testing-library/react";
import NavigationMenu from "./NavigationMenu";
import { MemoryRouter } from "react-router-dom";
import App from "../App/App";

beforeAll(() => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );
});

describe("Given the NavigationMenu component", () => {
  describe("When rendered", () => {
    test("Then it should show a link with 'Add'", () => {
      const expectedLinkText = /create post/i;

      const link = screen.getByRole("navigation", { name: expectedLinkText });

      expect(link).toBeInTheDocument();
    });

    test("Then it should show a link with 'List'", () => {
      const expectedLinkText = /posts/i;

      const link = screen.getByRole("link", {
        name: "Posts",
      });

      expect(link).toBeInTheDocument();
    });
  });
});
