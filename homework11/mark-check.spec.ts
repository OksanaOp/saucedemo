/*
3. Перевірка оцінки
Якщо бал >= 50 — "Тест складено".
Якщо < 50 — "Тест не складено".
Вхід: Бал (наприклад, 42)
*/

import { expect, test } from "@playwright/test";
import { markCheck } from "./markCheck";

test("Mark1: Positive -min", { tag: ["@positive"] }, async ({ page }) => {
  const mark = 51;
  let result = markCheck(mark);
  expect(result).toBe("Тест складено");
});

test("Mark2: Positive -max", { tag: ["@positive"] }, async ({ page }) => {
  const mark = 100;
  let result = markCheck(mark);
  expect(result).toBe("Тест складено");
});

test("Mark3: Negative exam mark", { tag: ["@negative"] }, async ({ page }) => {
  const mark = 49;
  let result = markCheck(mark);
  expect(result).toBe("Тест не складено");
});

test("Mark4: Mark is >100", { tag: ["@negative"] }, async ({ page }) => {
  const mark = 101;
  let result = markCheck(mark);
  expect(result).toBe("system error");
});

test(
  "Mark5: Mark is negative number",
  { tag: ["@negative"] },
  async ({ page }) => {
    const mark = -1;
    let result = markCheck(mark);
    expect(result).toBe("system error");
  }
);
