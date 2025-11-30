import { Page } from "@playwright/test";

export async function clickOnMocha(page: Page) {
  await page.locator('[data-test="Mocha"]').click();
}

export async function clickOnCheckoutButton(page: Page) {
  await page.locator('[data-test="checkout"]').click();
}

export async function clickOnMochaButton(page: Page) {
  await page.getByRole("button", { name: "Add one Mocha" }).click();
}

export async function fillName(page: Page, name: string) {
  await page.getByRole("textbox", { name: "Name" }).fill(name);
}
export async function fillEmail(page: Page, email: string) {
  await page.getByRole("textbox", { name: "Email" }).fill(email);
}

export async function tickCheckbox(page: Page) {
  await page
    .getByRole("checkbox", {
      name: "Promotion checkbox",
    })
    .check();
}

export async function clickOnSubmitButton(page: Page) {
  await page.getByRole("button", { name: "Submit" }).click();
}

export function getAllLocators(page: Page) {
  const mochaLocator = page.locator('[data-test="Mocha"]');
  const checkoutButtonLocator = page.locator('[data-test="checkout"]');
  const nameLocator = page.getByRole("textbox", { name: "Name" });
  const emailLocator = page.getByRole("textbox", { name: "Email" });
  const checkboxLocator = page.getByRole("checkbox", {
    name: "Promotion checkbox",
  });
  const submitButtonLocator = page.getByRole("button", { name: "Submit" });

  return {
    mochaLocator,
    checkoutButtonLocator,
    nameLocator,
    emailLocator,
    checkboxLocator,
    submitButtonLocator,
  };
}
