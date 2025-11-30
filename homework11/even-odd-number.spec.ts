/* 1. 
Парне чи непарне число
Напишіть програму, яка визначає, чи число парне або непарне.
Вхід: Число (наприклад, 4)
Вихід:
- "Число парне."
- "Число непарне."
*/

import { test, expect } from "@playwright/test";
import { isEven } from "./isEvent";

test("TC01: Number is even", { tag: ["@positive"] }, async ({ page }) => {
  const number = 4;
  const result = isEven(number);
  expect(result).toBe("Число парне.");
});

test("TC02: Number is odd", { tag: ["@positive"] }, async ({ page }) => {
  const number = 3;
  const result = isEven(number);
  expect(result).toBe("Число непарне.");
});

test(
  "TC03: Negative Number is even",
  { tag: ["@positive"] },
  async ({ page }) => {
    const number = -12;
    const result = isEven(number);
    expect(result).toBe("Число парне.");
  }
);

test(
  "TC04: Negative Number is odd",
  { tag: ["@positive"] },
  async ({ page }) => {
    const number = -13;
    const result = isEven(number);
    expect(result).toBe("Число непарне.");
  }
);

test("TC05: 0 Number is even", { tag: ["@positive"] }, async ({ page }) => {
  const number = 0;
  const result = isEven(number);
  expect(result).toBe("Число парне.");
});
