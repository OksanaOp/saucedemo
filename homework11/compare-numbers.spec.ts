/*
5. Порівняння чисел
Порівняйте два числа: виведіть більше, або повідомте, що числа рівні.
Вхід: Два числа (наприклад, 8 і 10)
Вихід:
- "Перше число більше."
- "Друге число більше."
- "Числа рівні."
*/

import { test, expect } from "@playwright/test";
import { compareNumbers } from "./compareNumbers";

test("T01: Numbers are equal", { tag: ["@smoke"] }, async ({ page }) => {
  const result = compareNumbers(3, 3);
  expect(result).toBe("Числа рівні.");
});

test("T02: Number a>b", { tag: ["@smoke"] }, async ({ page }) => {
  const result = compareNumbers(10, 3);
  expect(result).toBe("Перше число більше.");
});
test("T03: Number a<b", { tag: ["@smoke"] }, async ({ page }) => {
  const result = compareNumbers(-6, 8);
  expect(result).toBe("Друге число більше.");
});

test("T04: Number a<b", { tag: ["@smoke"] }, async ({ page }) => {
  //@ts-ignore
  expect(() => compareNumbers("srt", true)).toThrowError("Error");
});

test("try catch", () => {
  try {
    //@ts-ignore
    compareNumbers("srt", true);
  } catch (e: any) {
    expect(e.message).toBe("Error");
  }
});
