import { test, expect } from "@playwright/test";
import { isPositive } from "./isPositive";
// Класи еквівалентності
// positive
// negative
// zero
// Граничні значення
// 1
// 0
// -1
// + бескінечність
// - бескінечність
test("is positive", async () => {
  const result = isPositive(1);
  expect(result).toBeTruthy();
});
test("is positive - max value", async () => {
  const result = isPositive(1.7976931348623157e308);
  expect(result).toBeTruthy();
});
test("is negative", async () => {
  const result = isPositive(-1);
  expect(result).toBeFalsy();
});
test("is negative - min value", async () => {
  const result = isPositive(-1.7976931348623157e308);
  expect(result).toBeFalsy();
});
test("zero should trow exception", () => {
  try {
    isPositive(0);
  } catch (error: any) {
    expect(error.message).toMatch("number is zero");
  }
});
