import { test, expect } from "@playwright/test";

test.describe("ordering", { tag: "@smoke" }, async () => {});

test("TR -01: Buy 4 different coffee types", async ({ page }) => {
  await page.goto("https://coffee-cart.app/");
  await page.locator('[data-test="Espresso"]').click();
  await page.locator('[data-test="Flat_White"]').click();
  await page.locator('[data-test="Cappuccino"]').click();
  await page.getByRole("button", { name: "Yes, of course!" }).click();
  await page.locator('[data-test="checkout"]').click();
  await page.getByRole("textbox", { name: "Name" }).fill("test");

  await page.getByRole("textbox", { name: "Email" }).fill("test@mail.com");
  await page.getByRole("checkbox", { name: "Promotion checkbox" }).check();
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(
    page.getByRole("button", { name: "Thanks for your purchase." })
  ).toBeVisible();
});

test("TR-02 Purchase  2 the same coffee", async ({ page }) => {
  await page.goto("https://coffee-cart.app/");
  await page.locator('[data-test="Mocha"]').click();
  await page.locator('[data-test="checkout"]').hover();
  await expect(page.getByText("Mocha x 1")).toBeVisible();
  await page.getByRole("button", { name: "Add one Mocha" }).click();
  await page.locator('[data-test="checkout"]').click();
  await page.getByRole("textbox", { name: "Name" }).fill("test");

  await page.getByRole("textbox", { name: "Email" }).fill("test2@mail.co");
  await page.getByRole("checkbox", { name: "Promotion checkbox" }).check();
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(
    page.getByRole("button", { name: "Thanks for your purchase." })
  ).toBeVisible();
});

test("TR-04 Add q-ty of coffee on the pop-up", async ({ page }) => {
  await page.goto("https://coffee-cart.app/");
  await expect(page.locator("#app")).toContainText("cart (0)");
  await page.locator('[data-test="Espresso"]').click();
  await page.getByRole("listitem").filter({ hasText: "cart (1)" }).click();
  await page.getByRole("link", { name: "Cart page" }).click();
  await expect(page.locator("#app")).toContainText("$10.00 x 1");
  await expect(page.locator('[data-test="checkout"]')).toContainText(
    "Total: $10.00"
  );
  await page.getByRole("button", { name: "Add one Espresso" }).click();

  await expect(page.locator("#app")).toContainText("$10.00 x 2");
  await expect(page.locator('[data-test="checkout"]')).toContainText(
    "Total: $20.00"
  );
});

test("TR -06 Submit form without adding coffee to cart", async ({ page }) => {
  await page.goto("https://coffee-cart.app/");
  await expect(page.locator("#app")).toContainText("cart (0)");
  await expect(page.locator('[data-test="checkout"]')).toContainText(
    "Total: $0.00"
  );
  await page.locator('[data-test="checkout"]').click();
  await page.getByRole("textbox", { name: "Name" }).fill("TEST");
  await page.getByRole("textbox", { name: "Email" }).fill("TEST@MAIL.COM");
  await expect(page.getByRole("textbox", { name: "Name" })).toHaveValue("TEST");
  await expect(page.getByRole("textbox", { name: "Email" })).toHaveValue(
    "TEST@MAIL.COM"
  );
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(
    page.getByRole("button", { name: "Thanks for your purchase." })
  ).toBeVisible();
});

test(
  "TR-07 Check coffee name and ingredients",
  {
    tag: ["@smoke"],
    annotation: {
      type: "description",
      description: "Check Coffee type and their ingredients",
    },
  },
  async ({ page }) => {
    await page.goto("https://coffee-cart.app/");
    await expect(
      page.getByRole("heading", { name: "Espresso $" })
    ).toBeVisible();
    await expect(page.locator('[data-test="Espresso"]')).toContainText(
      "espresso"
    );
    await expect(
      page.getByRole("heading", { name: "Espresso Macchiato $" })
    ).toBeVisible();
    await expect(
      page.locator('[data-test="Espresso_Macchiato"]')
    ).toContainText("espressomilk foam");
    await expect(
      page.getByRole("heading", { name: "Cappuccino $" })
    ).toBeVisible();
    await expect(page.locator('[data-test="Cappuccino"]')).toContainText(
      "espressosteamed milkmilk foam"
    );
  }
);
