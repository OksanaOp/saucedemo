// написати 1 тест на https://demo.learnwebdriverio.com/login щоб логінитись і створити 10 акртіклів
// (в масиві ввести 10 назви артіклів потім фор циклом пройтись по ньому щоб створити артікли
// (знайти селектор і передати його (i) з циклу for))

import { test, expect, Page } from "@playwright/test";
import createUser from "./createUser";
import { time } from "console";

test("Home3.2.1 Register with valid values", async ({ page }) => {
  await page.goto("/register");
  // деструктуризація обєкта:
  //const { userName, email, password } = await createUser(page);
  const user1 = await createUser(page);
  const createArticleLocator = page.getByRole("link", { name: "New Article" });
  const articleTitleInputLocator = page.getByRole("textbox", {
    name: "Article Title",
  });
  const articleDescriptionInputLocator = page.getByRole("textbox", {
    name: "What's this article about?",
  });
  const articleTextInputLocator = page.getByRole("textbox", {
    name: "Write your article (in",
  });
  const tagsInputLocator = page.getByRole("textbox", { name: "Enter tags" });
  const publishButtonLocator = page.getByRole("button", {
    name: "Publish Article",
  });
  const profileNavigationLocator = page
    .getByRole("navigation")
    .getByRole("link", { name: user1.userName });

  await profileNavigationLocator.click();

  const createdTitles = [];

  for (let index = 0; index < 10; index++) {
    await page.reload();
    await createArticleLocator.click();
    await expect(page).toHaveURL("/editor");

    const n = index + 1;
    const titleId = n > 9 ? n : "0" + n;
    const title = `Test Article ${titleId}`;

    await articleTitleInputLocator.fill(title);
    await articleDescriptionInputLocator.fill("test description");
    await articleTextInputLocator.fill("test test of article2");
    await tagsInputLocator.fill("test");
    await publishButtonLocator.click();
    await page.waitForTimeout(1000);
    createdTitles.push(title);
  }

  //логаут юзером 1
  await page.getByRole("link", { name: "Settings" }).click();
  await page.getByRole("button", { name: "Or click here to logout." }).click();

  //створюємо 2-го юзера
  const user2 = await createUser(page);

  await page.goto(`/@${user1.userName.toLowerCase()}`);
  await page.getByRole("button", { name: `Follow ${user1.userName}` }).click();

  //logout user2
  await page.getByRole("link", { name: "Settings" }).click();
  await page.getByRole("button", { name: "Or click here to logout." }).click();

  //login user1
  await page.goto("/login");
  await page
    .getByRole("textbox", { name: "Email" })
    .fill(user1.email.toLowerCase());
  await page.getByRole("textbox", { name: "Password" }).fill(user1.password);
  await page.getByRole("button", { name: "Sign in" }).click();
  await page.getByRole("navigation").filter({ hasText: user1.userName });

  await page.getByRole("link", { name: "Your Feed" }).click();
  await page.waitForTimeout(2000);

  for (let index = createdTitles.length - 1; index >= 0; index--) {
    if (index === 4) {
      await page
        .locator('[data-test="page-link-2"]')
        .getByRole("link", { name: "2" })
        .click();
    }
    const name = createdTitles[index];
    const titleLocator = page.getByRole("heading", { name });

    await expect(titleLocator).toBeVisible();
  }
});
