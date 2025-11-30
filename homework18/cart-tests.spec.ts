import { expect, Page, test } from "@playwright/test";
import { LoginPage } from "./LoginPage";
import { InventoryPage } from "./Inventory";
import { CartPage } from "./CartPage";

test.beforeEach(async ({ page }) => {
  const username = "standard_user";
  const password = "secret_sauce";
  await page.goto("/");
  const loginPage = new LoginPage(page);
  await loginPage.login(username, password);
  await expect(page).toHaveURL("/inventory.html");
  const inventoryPage = new InventoryPage(page);
  await inventoryPage.addToCartByTitle("Sauce Labs Backpack");
  await inventoryPage.checkIsRemovableByTitle("Sauce Labs Backpack");
});

test("TS2 Remove product on cart by title", async ({ page }) => {
  await page.goto("/cart.html");
  const cartPage = new CartPage(page);
  await cartPage.getPriceByTitle("Sauce Labs Backpack");
  const removedCardContainer = await cartPage.removeFromCartByTitle(
    "Sauce Labs Backpack"
  );
  await expect(removedCardContainer).not.toBeVisible();
});

test("TS3 Go to Checkout", async ({ page }) => {
  await page.goto("/cart.html");
  const cartPage = new CartPage(page);
  cartPage.checkout();
  await expect(page).toHaveURL("/checkout-step-one.html");
});

test("TS3 Click on Continue Shopping", async ({ page }) => {
  await page.goto("/cart.html");
  const cartPage = new CartPage(page);
  cartPage.continueShopping();
});
