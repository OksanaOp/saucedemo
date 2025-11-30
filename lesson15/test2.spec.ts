import { expect, Page, test } from "@playwright/test";

test("TR-02 Purchase  2 the same coffee", async ({ page }) => {
  await page.goto("/");

  const coffee = [
    "Mocha",
    "Esspresso",
    "Capuccino",
    "Flat_White",
    "Americano",
    "Cafe_Latte",
  ];
});

const testData = [
  {
    id: 1,
    coffee: ["Esspresso"],
    orderInfo: {
      Name: "Oksana",
      Email: "test@gmail.com",
    },
    expect: async (page: Page) => await expect(page.locator("")).toBeVisible(),
  },
  {
    id: 2,
    coffee: ["Americano", "Flat_White"],
    orderInfo: {
      Name: "Oksana",
      Email: "test@gmail.com",
    },
    expect: async (page: Page) =>
      await expect(page.locator("")).toBeVisible({ visible: false }),
  },
];

// деструктуризація обєкта
for (const data of testData) {
  test(`TR${data.id} Purchase  2 the same coffee`, async ({ page }) => {
    await page.goto("/");

    for (const drink of data.coffee) {
      console.log(drink);
      await page.locator(`[data-test="${drink}"`).click();
    }

    await page.locator('[data-test="checkout"]').click();

    for (const key in data.orderInfo) {
      await page.getByRole("textbox", { name: key }).fill(data.orderInfo[key]);
    }

    await page.getByRole("checkbox", { name: "Promotion checkbox" }).check();
    await page.getByRole("button", { name: "Submit" }).click();
    await data.expect(page);
  });
}
////////////////////

function getLocators(page: Page) {
  return {
    drinks: (drink: string) => page.locator(`[data-test="${drink}"]`),
    nameInput: () => page.getByRole("textbox", { name: "Name" }),
    emailInput: () => page.getByRole("textbox", { name: "Email" }),
    promotionCheckbox: () =>
      page.getByRole("checkbox", { name: "Promotion checkbox" }),
    submitButton: () => page.getByRole("button", { name: "Submit" }),
    checkoutButton: () => page.locator('[data-test="checkout"]'),
  };
}

test(`PS-001151 param`, async ({ page }) => {
  const locators = getLocators(page);

  await page.goto("https://coffee-cart.app/");

  await locators.drinks("Espresso").click();
  await locators.checkoutButton().click();

  await locators.nameInput().fill("Pavlo");
  await locators.emailInput().fill("Pavlo@gm.com");

  await locators.promotionCheckbox().click();
  await locators.submitButton().click();
});
