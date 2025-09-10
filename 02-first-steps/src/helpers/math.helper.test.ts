import { describe, expect, test } from "vitest";
import { add, multiply, substract } from "./math.helper";

describe("add", () => {
  test("should add two possitives numbers ", () => {
    // ! Arrange
    const a = 1;
    const b = 2;

    // ! Act
    const result = add(a, b);

    // ! Assert
    expect(result).toBe(a + b);
  });

  test("should add two negative numbers ", () => {
    // ! Arrange
    const a = -1;
    const b = -2;

    // ! Act
    const result = add(a, b);

    // ! Assert
    expect(result).toBe(a + b);
  });
});

describe("substract", () => {
  test("should substract two possitives numbers ", () => {
    // ! Arrange
    const a = 1;
    const b = 2;

    // ! Act
    const result = substract(a, b);

    // ! Assert
    expect(result).toBe(a - b);
  });
});

describe("multiply", () => {
  test("should multiply two possitives numbers ", () => {
    // ! Arrange
    const a = 1;
    const b = 2;

    // ! Act
    const result = multiply(a, b);

    // ! Assert
    expect(result).toBe(a * b);
  });
  test("should multiply two negative numbers ", () => {
    // ! Arrange
    const a = -1;
    const b = -2;

    // ! Act
    const result = multiply(a, b);

    // ! Assert
    expect(result).toBe(a * b);
  });

  test("should multiply by zero ", () => {
    // ! Arrange
    const a = 0;
    const b = -2;

    // ! Act
    const result = multiply(a, b);

    // ! Assert
    expect(result).toBe(0);
  });
});
