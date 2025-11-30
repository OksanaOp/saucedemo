import { faker } from "@faker-js/faker";
import { expect, Page } from "@playwright/test";

const createUser = async (
  page: Page,
  userName = faker.person.firstName(),
  email = faker.internet.email(),
  password = faker.internet.password()
) => {
  console.log({ userName, email, password });
  await page.goto("/register");
  await page.getByRole("textbox", { name: "Username" }).fill(userName);
  await page.getByRole("textbox", { name: "Email" }).fill(email);
  await page.getByRole("textbox", { name: "Password" }).fill(password);
  await page.getByRole("button", { name: "Sign up" }).click();

  await expect(page.url()).toContain("/");
  await expect(page.getByRole("link", { name: `${userName}` })).toBeVisible();

  return {
    userName,
    email,
    password,
  };
};

export default createUser;
