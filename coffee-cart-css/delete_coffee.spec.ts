import { test, expect } from "@playwright/test";

test("TR-05 Delete all coffee in the cart via - picker", async ({ page }) => {
  await page.goto("/");
  await page.locator('[data-test="Cappuccino"]').click();

  await page.locator('#app[aria-label="Cart page"]').getByText("cart (1)");
  await page.click('a[href="/cart"]');
  await expect(page).toHaveURL("/cart");
  await page.getByRole("button", { name: "Remove one Cappuccino" }).click();
  const messageLocator = page.locator(".list > p");
  await expect(messageLocator).toHaveText("No coffee, go add some.");
});

test("TR-08 Delete all coffee in the cart via - [x] icon", async ({ page }) => {
  await page.goto("/");
  //await page.getByTestId("Cappuccino").click();
  await page.locator('[data-test="Cappuccino"]').click();
  await page.click('a[href="/cart"]');
  await page.locator(".delete").click();
  const messageLocator = page.locator(".list > p");
  await expect(messageLocator).toHaveText("No coffee, go add some.");
});
