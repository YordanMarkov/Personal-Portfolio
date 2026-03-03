import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from "../Header";

test("renders navigation buttons", () => {
  render(<Header activePage="home" setActivePage={() => {}} />);
  expect(screen.getByRole("button", { name: /home/i })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /about/i })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /projects/i })).toBeInTheDocument();
});

test("clicking About calls setActivePage('about')", async () => {
  const user = userEvent.setup();
  const setActivePage = jest.fn();

  render(<Header activePage="home" setActivePage={setActivePage} />);
  await user.click(screen.getByRole("button", { name: /about/i }));

  expect(setActivePage).toHaveBeenCalledWith("about");
});