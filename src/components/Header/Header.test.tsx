import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Given the Header component", () => {
  describe("When rendered", () => {
    test("Then it should show 'The Why Blog' insade a heading", () => {
      const expectedTitle = /the why blog/i;

      render(<Header />);

      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });
  });
});
