import { test, expect } from "@playwright/test";

test("TR-02 Purchase  2 the same coffee", async ({ page }) => {
  await page.goto("/");
  await page.locator('[data-test="Mocha"]').click();
  await page.locator('[data-test="checkout"]').hover();
  await page.locator(".list-item").isVisible();

  await page.getByRole("button", { name: "Add one Mocha" }).click();
  await page.locator('[data-test="checkout"]').click();
  await page.locator("#name").fill("Oksana");
  await page.locator("#email").fill("oksa@mail.co");
  await page.locator("#promotion").isChecked();
  await page.locator("#submit-payment").click();
  await page.locator(".modal-content size").isHidden();

  await page
    .locator(".snackbar success")
    .getByText("Thanks for your purchase.");

  const success = page.getByRole("button", {
    name: "Thanks for your purchase.",
  });

  await expect(success).toContainText(
    "Thanks for your purchase. Please check your email for payment."
  );
});
