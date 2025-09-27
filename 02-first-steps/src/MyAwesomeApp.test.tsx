import { describe, expect, test } from "vitest";
import { MyAwesomeApp } from "./MyAwesomeApp";
import { render, screen } from "@testing-library/react";

describe("MyAwesomeApp", () => {
  test("Should render firstname and lastname - render", () => {
    const { container } = render(<MyAwesomeApp />);
    // screen.debug();

    const h1 = container.querySelector("h1");
    const h3 = container.querySelector("h3");

    expect(h1?.innerHTML).toContain("Luis");
    expect(h3?.innerHTML).toContain("Franco");
  });

  test("Should render firstname and lastname - screen", () => {
    render(<MyAwesomeApp />);
    screen.debug();

    const h1 = screen.getByTestId("first-name-title");
    expect(h1?.innerHTML).toContain("Luis");
  });

  test("Should match snapshot", () => {
    const { container } = render(<MyAwesomeApp />);
    expect(container).toMatchSnapshot();
  });

    test("Should match snapshot", () => {
    render(<MyAwesomeApp />);
    
    expect(screen.getByTestId('div-app')).toMatchSnapshot();
    });
});
