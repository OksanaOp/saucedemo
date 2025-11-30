import { test, expect } from "@playwright/test";

test("TR-05 Delete all coffee in the cart via - picker", async ({ page }) => {
  await page.goto("https://coffee-cart.app/");
  await page.locator('[data-test="Cappuccino"]').click();
  await page.getByRole("listitem").filter({ hasText: "cart (1)" }).click();
  await page.getByRole("link", { name: "Cart page" }).click();
  await page.getByRole("button", { name: "Remove one Cappuccino" }).click();
  await expect(page.getByRole("paragraph")).toContainText(
    "No coffee, go add some."
  );
});

test("TR-08 Delete all coffee in the cart via - [x] icon", async ({ page }) => {
  await page.goto("https://coffee-cart.app/");
  await page.locator('[data-test="Americano"]').click();
  await page.locator('[data-test="Flat_White"]').click();
  await expect(page.getByLabel("Cart page")).toContainText("cart (2)");
  await page.getByRole("link", { name: "Cart page" }).click();
  await page.getByRole("button", { name: "Remove all Americano" }).click();
  await page.getByRole("button", { name: "Remove all Flat White" }).click();
  await expect(page.getByLabel("Cart page")).toContainText("cart (0)");
  await expect(page.getByRole("paragraph")).toContainText(
    "No coffee, go add some."
  );
});
