import { test, expect } from "@playwright/test";

test("TR -09 Extra coffee notification appears", async ({ page }) => {
  await page.goto("/");
  await page.locator('[data-test="Flat_White"]').click({ clickCount: 3 });
  await expect(page.locator(".promo")).toBeVisible();
  const notification = page.locator(".promo");
  await expect(notification).toContainText(
    "It's your lucky day! Get an extra cup of Mocha for $4."
  );
});

test("TR-10 Success notification is displayed", async ({ page }) => {
  await page.goto("/");
  await page.locator('[data-test="Flat_White"]').click();
  await page.locator('[data-test="checkout"]').click();
  await page.locator("#name").fill("Oksana");
  await page.locator("#email").fill("oksa@mail.co");
  await page.locator("#promotion").isChecked();
  await page.locator("#submit-payment").click();

  const success = page.getByRole("button", {
    name: "Thanks for your purchase.",
  });
  await expect(success).toContainText(
    "Thanks for your purchase. Please check your email for payment."
  );
});
