import { expect, Page, test } from "@playwright/test";
import { LoginPage } from "./LoginPage";
import { InventoryPage } from "./Inventory";

test.beforeEach(async ({ page }) => {
  const username = "standard_user";
  const password = "secret_sauce";
  await page.goto("https://www.saucedemo.com/");
  const loginPage = new LoginPage(page);
  await loginPage.login(username, password);
  await expect(page).toHaveURL("/inventory.html");
});

test("TS2 Add products by name", async ({ page }) => {
  const inventoryPage = new InventoryPage(page);
  await inventoryPage.addToCartByTitle("Sauce Labs Backpack");
  await inventoryPage.checkIsRemovableByTitle("Sauce Labs Backpack");
});

test("TS-2 Remove product by title", async ({ page }) => {
  const inventoryPage = new InventoryPage(page);
  await inventoryPage.addToCartByTitle("Sauce Labs Backpack");
  await inventoryPage.checkIsRemovableByTitle("Sauce Labs Backpack");
  await inventoryPage.removeFromCartByTitle("Sauce Labs Backpack");
});

test("TS-2 Get prise by title", async ({ page }) => {
  const inventoryPage = new InventoryPage(page);
  const prise = await inventoryPage.getPriceByTitle("Sauce Labs Backpack");
  console.log(prise);
  expect(prise).toContain("$29.99");
});
