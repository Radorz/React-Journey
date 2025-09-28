import { describe, expect, test } from "vitest";
import ItemCounter from "./ItemCounter";
import { fireEvent, render, screen } from "@testing-library/react";

describe("ItemCounter", () => {
  test("Should render with default values", () => {
    const name = "Control de Nintendo";

    render(<ItemCounter name={name} />);

    expect(screen.getByText(name)).toBeDefined();
    expect(screen.getByText(name)).not.toBeNull();
  });

  test("Should render with custom quantity", () => {
    const name = "Control de Nintendo";
    const quantity = 10;

    render(<ItemCounter name={name} quantity={quantity} />);

    expect(screen.getByText(quantity)).toBeDefined();
  });

  test("Should increase count when +1 button is pressed", () => {
    const name = "Test Item";
    render(<ItemCounter name={name} quantity={1} />);

    const [buttonAdd] = screen.getAllByRole('button');

    fireEvent.click(buttonAdd);
    //   const buttons
      expect(screen.getByText('2')).toBeDefined();
  });

  test("Should decrease count when -1 button is pressed", () => {
    const name = "Test Item";
    render(<ItemCounter name={name} quantity={4} />);

    const [,buttonSubs] = screen.getAllByRole("button");

    fireEvent.click(buttonSubs);
    //   const buttons
      expect(screen.getByText("3")).toBeDefined();
  });

    test("Should not decrease count when -1 button is pressed and quantity is 1", () => {
      const name = "Test Item";
      render(<ItemCounter name={name} quantity={1} />);

      const [, buttonSubs] = screen.getAllByRole("button");

      fireEvent.click(buttonSubs);
      //   const buttons
      expect(screen.getByText("1")).toBeDefined();
    });

    // test("Should change to red when count is 1", () => {
    //   const name = "Test Item";
    //   render(<ItemCounter name={name} quantity={1} />);

    //   const itemText = screen.getByText(name);

    //   //   const buttons
    //   expect(itemText.style.color).toBe('red');
    // });

    


});
