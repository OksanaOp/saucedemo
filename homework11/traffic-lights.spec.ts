/*
6. Дорога і світлофор
Якщо зелений — переходьте.
Якщо жовтий — підготуйтеся.
Якщо червоний — зачекайте.
Вхід: Колір світлофора (наприклад, "жовтий")
*/

import { test, expect } from "@playwright/test";
import { trafficLightCheck } from "./trafficLight";

test("TR1:Check yellow color", { tag: ["@smoke"] }, async ({ page }) => {
  const result = trafficLightCheck("жовтий");
  expect(result).toBe("підготуйтеся");
});

test("TR2:Check green color", { tag: ["@smoke"] }, async ({ page }) => {
  const result = trafficLightCheck("зелений");
  expect(result).toBe("Переходьте");
});

test("TR3:Check red color", { tag: ["@smoke"] }, async ({ page }) => {
  const result = trafficLightCheck("червоний");
  expect(result).toBe("зачекайте");
});

test("TR4:Check other color", { tag: ["@smoke"] }, async ({ page }) => {
  const result = trafficLightCheck("білий");
  expect(result).toBe("system error");
});
