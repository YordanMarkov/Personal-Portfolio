import { render, screen } from "@testing-library/react";
import PageTransition from "../PageTransition";

jest.useFakeTimers();

test("renders initial child and transitions on activeKey change", () => {
  const { rerender } = render(
    <PageTransition activeKey="home">
      <div>HOME</div>
    </PageTransition>
  );

  expect(screen.getByText("HOME")).toBeInTheDocument();

  rerender(
    <PageTransition activeKey="about">
      <div>ABOUT</div>
    </PageTransition>
  );

  // before timer completes, old content still displayed
  expect(screen.getByText("HOME")).toBeInTheDocument();

  // run the 300ms timeout
  jest.advanceTimersByTime(300);

  expect(screen.getByText("ABOUT")).toBeInTheDocument();
});