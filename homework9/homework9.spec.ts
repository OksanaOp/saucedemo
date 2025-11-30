import { test, expect } from "@playwright/test";

test("TR-05 Delete all coffee in the cart via - picker", async ({ page }) => {
  const cappuccino = page.locator('[data-test="Cappuccino"]');
  const cartLink = page.getByRole("link", { name: "Cart page" });
  const removeButtonLocator = page.getByRole("button", {
    name: "Remove one Cappuccino",
  });

  const emptyCartText = page
    .locator(".list")
    .getByText("No coffee, go add some.");

  await page.goto("/");
  await cappuccino.click();
  await cartLink.click();
  await removeButtonLocator.click();
  await expect(emptyCartText).toContainText("No coffee, go add some.");
});

test("TR-08 Delete all coffee in the cart via - [x] icon", async ({ page }) => {
  const addAmericano = page.locator('[data-test="Americano"]');
  const addFlatWhite = page.locator('[data-test="Flat_White"]');
  const cartTitle = page.getByLabel("Cart page");
  const cartLink = page.getByRole("link", { name: "Cart page" });
  const removeAllAmericano = page.getByRole("button", {
    name: "Remove all Americano",
  });
  const removeAllFlatWhite = page.getByRole("button", {
    name: "Remove all Flat White",
  });
  const emptyCartText = page
    .locator(".list")
    .getByText("No coffee, go add some.");

  await page.goto("/");
  await addAmericano.click();
  await addFlatWhite.click();
  await expect(cartTitle).toContainText("cart (2)");
  await cartLink.click();
  await removeAllAmericano.click();
  await removeAllFlatWhite.click();
  await expect(cartTitle).toContainText("cart (0)");
  await expect(emptyCartText).toContainText("No coffee, go add some.");
});

test(
  "TR-02 Purchase  2 the same coffee",
  { tag: ["@smoke"] },
  async ({ page }) => {
    const MochaLocator = page.locator('[data-test="Mocha"]');
    const checkoutButtonLocator = page.locator('[data-test="checkout"]');
    const checkoutModalLocator = page.getByText("Mocha x 1");
    const addMochaLocator = page.getByRole("button", { name: "Add one Mocha" });
    const nameLocator = page.getByRole("textbox", { name: "Name" });
    const emailLocator = page.getByRole("textbox", { name: "Email" });
    const checkboxLocator = page.getByRole("checkbox", {
      name: "Promotion checkbox",
    });
    const submitButtonLocator = page.getByRole("button", { name: "Submit" });
    const successMessageLocator = page.getByRole("button", {
      name: "Thanks for your purchase.",
    });

    await page.goto("/");
    await MochaLocator.click();
    await checkoutButtonLocator.hover();
    await expect(checkoutModalLocator).toBeVisible();
    await addMochaLocator.click();
    await checkoutButtonLocator.click();

    await nameLocator.fill("test");
    await emailLocator.fill("test2@mail.co");
    await checkboxLocator.check();
    await submitButtonLocator.click();
    await expect(successMessageLocator).toBeVisible();
  }
);

test(
  "TR -09 Extra coffee notification appears",
  { tag: ["@smoke"] },
  async ({ page }) => {
    const espresso = page.locator('[data-test="Espresso"]');
    const luckyModal = page.getByText(
      "It's your lucky day! Get an extra cup of Mocha for $4.espressochocolate"
    );
    const modalLocator = page.locator("#app");

    await page.goto("/");
    await espresso.click({ clickCount: 3 });
    await expect(luckyModal).toBeVisible();
    // await expect(modalLocator).toContainText(
    //    "It's your lucky day! Get an extra cup of Mocha for $4."
    //   );
    await expect(modalLocator).toContainText("Yes, of course!");
    await expect(modalLocator).toContainText("Nah, I'll skip.");
  }
);

test(
  "TR-04 Add q-ty of coffee on the pop-up",
  { tag: ["@smoke"] },
  async ({ page }) => {
    const cartLocator = page.locator("#app");
    const espressoLocator = page.locator('[data-test="Espresso"]');
    const cartLink = page.getByRole("link", { name: "Cart page" });
    const checkoutButtonLocator = page.locator('[data-test="checkout"]');
    const addEspressoLocator = page.getByRole("button", {
      name: "Add one Espresso",
    });

    await page.goto("/");
    await expect(cartLocator).toContainText("cart (0)");
    await espressoLocator.click();
    await cartLink.click();
    await expect(cartLocator).toContainText("$10.00 x 1");
    await expect(checkoutButtonLocator).toContainText("Total: $10.00");
    await addEspressoLocator.click();
    await expect(cartLocator).toContainText("$10.00 x 2");
    await expect(checkoutButtonLocator).toContainText("Total: $20.00");
  }
);
