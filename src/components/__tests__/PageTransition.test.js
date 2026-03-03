import { render, screen, act } from "@testing-library/react";
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

  // still old content before timer completes
  expect(screen.getByText("HOME")).toBeInTheDocument();

  // flush the timeout inside act
  act(() => {
    jest.advanceTimersByTime(300);
  });

  expect(screen.getByText("ABOUT")).toBeInTheDocument();
});