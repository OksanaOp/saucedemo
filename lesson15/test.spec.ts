import { test } from "@playwright/test";

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

  const orderInfo = {
    //називаєм ключ так само як ось тут await page.getByRole("textbox", { name: "Name" })
    Name: "Oksana",
    Email: "test@gmail.com",
  };

  for (const drink of coffee) {
    console.log(drink);
    await page.locator(`[data-test="${drink}"`).click();
  }

  await page.locator('[data-test="checkout"]').click();

  for (const key in orderInfo) {
    await page.getByRole("textbox", { name: key }).fill(orderInfo[key]);
    //   await page.getByRole("textbox", { name: "Name" }).fill(orderInfo.name);
    //   await page.getByRole("textbox", { name: "Email" }).fill(orderInfo.email);
  }

  await page.getByRole("checkbox", { name: "Promotion checkbox" }).check();
  await page.getByRole("button", { name: "Submit" }).click();
});
