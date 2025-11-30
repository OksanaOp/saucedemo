//homework after lesson4

import { test, expect, Page } from "@playwright/test";
import { time } from "console";
import { faker } from "@faker-js/faker";

const userName = faker.person.firstName();
const email = faker.internet.email();
const password = faker.internet.password();

const createUser = async (
  page: Page,
  uname = userName,
  uemail = email,
  upassword = password
) => {
  console.log({ uname, uemail });
  await page.getByRole("textbox", { name: "Username" }).fill(uname);
  await page.getByRole("textbox", { name: "Email" }).fill(uemail);
  await page.getByRole("textbox", { name: "Password" }).fill(upassword);
  await page.getByRole("button", { name: "Sign up" }).click();
};

test.beforeEach(() => {
  console.log({ userName, email });
});

test("Home3.2.1 Register with valid values", async ({ page }) => {
  await page.goto("/register");

  await expect(page.getByRole("heading", { name: "Sign up" })).toBeVisible();
  await expect(page.locator("#app")).toContainText("Sign up");

  await createUser(page);
  await page.getByRole("navigation").filter({ hasText: userName });
});

test("Home3.2.3 Register with already used username", async ({ page }) => {
  await page.goto("/register");

  await createUser(page);
  await page.locator('[href="/settings"]').isVisible();
  await page.locator('[href="/settings"]').click();
  await expect(page).toHaveURL("/settings");
  await page.locator("button", { hasText: "Or click here to logout." }).click();

  await page.goto("/register");
  const newUserEmail = faker.internet.email();
  await createUser(page, userName, newUserEmail, undefined);
  await expect(page.getByText("username is already taken.")).toBeVisible();
});

test("Home3.2.4 Register with already used email", async ({ page }) => {
  await page.goto("/register");

  await createUser(page);
  await page.locator('[href="/settings"]').isVisible();
  await page.locator('[href="/settings"]').click();
  await expect(page).toHaveURL("/settings");
  await page.locator("button", { hasText: "Or click here to logout." }).click();

  await page.goto("/register");
  const newUserName = faker.person.firstName();
  await createUser(page, newUserName, email, undefined);
  await expect(page.getByText("email is already taken.")).toBeVisible();
});

test("Home3.2.2 Register with empty values", async ({ page }) => {
  await page.goto("/register");
  await page.getByRole("button", { name: "Sign up" }).click();
  const errors = page.locator("ul.error-messages > li");
  await expect(errors).toHaveCount(2);
  await expect(page.getByText("email can't be blank")).toBeVisible();
  await expect(page.getByText("username can't be blank")).toBeVisible();
});

test("Home3.2.5 Redirect to sign in", async ({ page }) => {
  await page.goto("/register");
  await page.getByRole("link", { name: "Have an account?" }).click();
  await expect(page).toHaveURL("/login");
});
