import { test, expect } from "@playwright/test";

test("TR -09 Extra coffee notification appears", async ({ page }) => {
  await page.goto("https://coffee-cart.app/");
  await page.locator('[data-test="Espresso"]').click({ clickCount: 3 });

  await expect(
    page.getByText(
      "It's your lucky day! Get an extra cup of Mocha for $4.espressochocolate"
    )
  ).toBeVisible();
  await expect(page.locator("#app")).toContainText(
    "It's your lucky day! Get an extra cup of Mocha for $4."
  );
  await expect(page.locator("#app")).toContainText("Yes, of course!");
  await expect(page.locator("#app")).toContainText("Nah, I'll skip.");
});

test("TR -03 Skip extra coffee", async ({ page }) => {
  await page.goto("https://coffee-cart.app/");
  await page.locator('[data-test="Espresso_Macchiato"]').click();
  await page.locator('[data-test="Flat_White"]').click();
  await page.locator('[data-test="Cafe_Breve"]').click();
  await page.getByRole("button", { name: "Nah, I'll skip." }).click();
  await expect(
    page.getByRole("listitem").filter({ hasText: "cart (3)" })
  ).toBeVisible();
});

test("TR-10 Success notification is displayed", async ({ page }) => {
  await page.goto("https://coffee-cart.app/");
  await page.locator('[data-test="Mocha"]').click();
  await page.locator('[data-test="checkout"]').click();
  await page.getByRole("textbox", { name: "Name" }).fill("test");
  await page.getByRole("textbox", { name: "Email" }).fill("test2@mail.co");
  await page.getByRole("checkbox", { name: "Promotion checkbox" }).check();
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(
    page.getByRole("button", { name: "Thanks for your purchase." })
  ).toBeVisible();
});
