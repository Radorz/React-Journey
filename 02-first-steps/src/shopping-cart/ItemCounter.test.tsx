import { describe, expect, test } from "vitest";
import ItemCounter from "./ItemCounter";
import { render, screen } from "@testing-library/react";

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

  test("Should increase count when +1 button si pressed", () => {
    const name = "Test Item";
    render(<ItemCounter name={name} />);

    //   const buttons
    //   expect(screen.getByText(quantity)).toBeDefined();
  });
});
