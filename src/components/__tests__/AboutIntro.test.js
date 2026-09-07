import { render, screen } from "@testing-library/react";
import AboutIntro from "../AboutIntro";

test("renders about intro content", () => {
  render(<AboutIntro />);
  expect(screen.getByText(/hi,/i)).toBeInTheDocument();
  expect(screen.getByText(/sofia/i)).toBeInTheDocument();
  expect(screen.getByText(/netherlands/i)).toBeInTheDocument();
});