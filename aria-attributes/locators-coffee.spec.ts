//пошук по тегам div
//пошук по класу через крапку .cup-body
//пошук по [Id] - #promotion
// data-test (data-testId) - найстабільніший атрибут для пошуку селекторів [data-test="Espresso"]
// пошук атрибутів в дужках [aria-label="Espresso"]] їх можна комбінувати з іншими атрибутами чи класами [aria-label="Espresso"][data-test="Espresso"][class="cup-body"]
// комбінація тегів і айдішки - input[id="userName"]

// [id *="userName"] - пошук по тому що введено в полі вводу (contains)
//[id ~="userName"] - пошук по тому що введено по кожному слову
//[id ^="userName"] - пошук по тому що введено по першому слову (якщо айдішка через тире наприклад id="userName-label"
//[id $="label"] - пошук по тому що введено по кінці (якщо айдішка через тире наприклад id="userName-label" то можна шукати
//// [id="userName-wrapper"] > div > label - спуск вниз щоб знайти css селектор

import { test, expect } from "@playwright/test";

test.describe("ordering", { tag: "@smoke" }, async () => {});

test("TR -01: Buy 4 different coffee types", async ({ page }) => {
  await page.goto("https://coffee-cart.app/");
  await page.locator('[data-test="Espresso"]').click();
  await page.getByTestId('[data-test="Espresso"]').click;
});
