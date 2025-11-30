/*
Вік для голосування
Напишіть програму, яка перевіряє, чи можна користувачу голосувати.
Вхід: Вік (наприклад, 17)
Вихід:
- Якщо >= 18: "Ви можете голосувати."
- Інакше: "Ви ще не можете голосувати."
*/

import { test, expect } from "@playwright/test";
import { votingAge } from "./ageForVoting";

test(
  "T01: 18 years - voting should be allowed",
  { tag: ["@positive"] },
  async ({ page }) => {
    const age = 18;
    let result = votingAge(age);
    expect(result).toBe("Ви можете голосувати.");
  }
);

test(
  "T02: 17 - Not enough age for voting",
  { tag: ["@positive"] },
  async ({ page }) => {
    const age = 17;
    let result = votingAge(age);
    expect(result).toBe("Ви ще не можете голосувати.");
  }
);

test("T03: Negative age number", { tag: ["@positive"] }, async ({ page }) => {
  const age = -18;
  let result = votingAge(age);
  expect(result).toBe("system error");
});

test(
  "T04: Boundary value of age -111 return system error",
  { tag: ["@negative"] },
  async ({ page }) => {
    const age = 111;
    let result = votingAge(age);
    expect(result).toBe("system error");
  }
);
