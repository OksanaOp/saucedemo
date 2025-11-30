/*2. Привітання за часом
Залежно від часу доби, виведіть привітання: "Доброго ранку!", "Доброго дня!" або "Доброго вечора!".
Вхід: Година (наприклад, 15)
Вихід:
- Якщо год < 12: "Доброго ранку!"
- Якщо год 12–18: "Доброго дня!"
- Якщо год > 18: "Доброго вечора!"
*/
import { test, expect } from "@playwright/test";
import { sayHiByHour } from "./sayHiByHours";

test(
  "T.1: Greetings in the morning time -11",
  { tag: ["@smoke"] },
  async ({ page }) => {
    const time = 11;
    let result = sayHiByHour(time);
    expect(result).toBe("Доброго ранку!");
  }
);

test(
  "T.2: Greetings in the afternoon -12",
  { tag: ["@smoke"] },
  async ({ page }) => {
    const time = 12;
    let result = sayHiByHour(time);
    expect(result).toBe("Доброго дня!");
  }
);

test(
  "T.3: Greetings in the afternoon -17",
  { tag: ["@smoke"] },
  async ({ page }) => {
    const time = 17;
    let result = sayHiByHour(time);
    expect(result).toBe("Доброго дня!");
  }
);

test(
  "T.4: Greetings in the evening -18",
  { tag: ["@smoke"] },
  async ({ page }) => {
    const time = 18;
    let result = sayHiByHour(time);
    expect(result).toBe("Доброго вечора!");
  }
);
