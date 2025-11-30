import { expect, Page, test } from "@playwright/test";
import { RegistrationPage } from "./RegistrationPage";

test("TS User registration should be successful", async ({ page }) => {
  const randomNumber = Math.floor(Math.random() * 9999);
  const username = `coach${randomNumber}`;

  await page.goto("https://demo.learnwebdriverio.com/", {
    timeout: 60_000,
  });
  //створюєм екземпляр класу на основі класу RegistrationPage
  const registrationPage = new RegistrationPage(page);
  await registrationPage.clickOnRegisterLink();
  await registrationPage.register(username, username + "@gmail.com", "12345");

  //fillUsername(username);
  // string completing - коли вставляю змінну в стрінгу:
  // await registrationPage.fillEmail(`${username}@gmail.com`);
  // await registrationPage.fillPassword("122343");
  // await registrationPage.clickSignUp();

  await expect(
    page.locator(`//a[contains(text(), '${username}')]`)
  ).toBeVisible();
});
