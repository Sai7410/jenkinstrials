import { add, subtract, divide } from "../api/calc.js";

describe("Calculator functions", () => {
  test("addition works correctly", () => {
    expect(add(3, 5)).toBe(8);
  });

  test("subtraction works correctly", () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test("division works correctly", () => {
    expect(divide(10, 2)).toBe(5);
  });

  test("division by zero throws error", () => {
    expect(() => divide(5, 0)).toThrow("Division by zero is not allowed.");
  });

  test("invalid input throws error", () => {
    expect(() => add("a", 5)).toThrow("Inputs must be numbers.");
  });
});


