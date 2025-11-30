import { expect, Page, test } from "@playwright/test";
import { LoginPage } from "./LoginPage";
test(
  "TS-1 Standard User login should be successful",
  { tag: ["@positive"] },
  async ({ page }) => {
    const username = "standard_user";
    const password = "secret_sauce";
    await page.goto("https://www.saucedemo.com/");
    const loginPage = new LoginPage(page);
    await loginPage.login(username, password);
    await expect(page).toHaveURL("/inventory.html");
  }
);
