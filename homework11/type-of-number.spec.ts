/*
7. Визначення типу числа
Напишіть програму, яка визначає, чи число додатнє, від’ємне або дорівнює нулю.
Вхід: Число (наприклад, -5)
Вихід:
- "Число додатнє."
- "Число від’ємне."
- "Число дорівнює нулю."
*/

import { test, expect } from "@playwright/test";
import { numberType } from "./typeOfNumber";

test("TR01: Number is positive", { tag: ["@smoke"] }, async ({ page }) => {
  let result = numberType(6464564);
  expect(result).toBe("Число додатнє.");
});

test("TR02: Number is negative", { tag: ["@smoke"] }, async ({ page }) => {
  let result = numberType(-1);
  expect(result).toBe("Число від’ємне.");
});

test("TR03: Number is equal to 0", { tag: ["@smoke"] }, async ({ page }) => {
  let result = numberType(0);
  expect(result).toBe("Число дорівнює нулю.");
});
