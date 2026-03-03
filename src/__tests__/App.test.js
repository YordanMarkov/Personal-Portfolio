import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

jest.mock("../components/HeroSection", () => () => <section id="home">HOME</section>);
jest.mock("../components/AboutSection", () => () => <section id="about">ABOUT</section>);
jest.mock("../components/ProjectsSection", () => () => <section id="projects">PROJECTS</section>);

test("starts at home and navigates to about", async () => {
  const user = userEvent.setup();
  render(<App />);

  expect(screen.getByText("HOME")).toBeInTheDocument();

  await user.click(screen.getByRole("button", { name: /about/i }));

  // PageTransition swaps after 300ms -> wait for it
  expect(await screen.findByText("ABOUT")).toBeInTheDocument();
});