import test, { expect } from "@playwright/test";

test("Home3.1.3 Log in with valid user credentials", async ({ page }) => {
  await page.getByRole("textbox", { name: "Email" }).fill(`${fakeUser.email}`);
  await page
    .getByRole("textbox", { name: "Password" })
    .fill(`${fakeUser.password}`);
  const [response] = await Promise.all([
    page.waitForResponse("**/api/users/login"),
    page.click("//button"),
  ]);

  await page.getByRole("button", { name: "Sign in" }).click();
  await page
    .getByRole("navigation")
    .filter({ hasText: `${fakeUser.userName}` });
});
