//homework after lesson4
import { test, expect } from "@playwright/test";
import { beforeEach } from "node:test";
import { faker } from "@faker-js/faker";
import { userInfo } from "os";

//створюєм юзера
const fakeUser = {
  userName: faker.person.firstName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
};

test.beforeEach(async ({ page }) => {
  await page.goto("/register");
  await page
    .locator(`//*[@placeholder="Username"]`)
    .fill(`${fakeUser.userName}`);
  await page.locator(`//*[@placeholder="Email"]`).fill(`${fakeUser.email}`);
  await page
    .locator(`//*[@placeholder="Password"]`)
    .fill(`${fakeUser.password}`);
  await page.locator("button", { hasText: "Sign up" }).click();
  await expect(
    page.getByRole("link", { name: `${fakeUser.userName} ` })
  ).toBeVisible();

  await page.locator('[href="/settings"]').isVisible();
  await page.locator('[href="/settings"]').click();
  await expect(page).toHaveURL("/settings");
  await page.locator("button", { hasText: "Or click here to logout." }).click();

  await page.goto("/login");
});

test("Home3.1.1 Log in with empty fields", async ({ page }) => {
  await page.getByRole("heading", { name: "Sign in" });
  await page.getByRole("button", { name: "Sign in" }).isEnabled();
  await page.getByRole("button", { name: "Sign in" }).click();

  await expect(page.getByText("email can't be blank")).toBeVisible();
});

test("Home3.1.2 Log in with not registered user", async ({ page }) => {
  await page
    .getByRole("textbox", { name: "Email" })
    .fill("unregister@mail.com");
  await page.getByRole("textbox", { name: "Password" }).fill("123");
  await page.getByRole("button", { name: "Sign in" }).click();

  await expect(page.getByText("email or password is invalid")).toBeVisible();
});

test("Home3.1.3 Log in with valid user credentials", async ({ page }) => {
  await page.getByRole("textbox", { name: "Email" }).fill(`${fakeUser.email}`);
  await page
    .getByRole("textbox", { name: "Password" })
    .fill(`${fakeUser.password}`);
  await page.getByRole("button", { name: "Sign in" }).click();
  await page
    .getByRole("navigation")
    .filter({ hasText: `${fakeUser.userName}` });
});

test("Home3.1.4 Redirect to sign up works", async ({ page }) => {
  await page.getByRole("link", { name: "Need an account?" }).click();
  await expect(page).toHaveURL("/register");
});
