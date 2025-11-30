import { test, expect } from "@playwright/test";

test("PL-01 Expand&collapse functionality", async ({ page }) => {
  await page.goto("https://playwright.dev/docs/intro");
  await expect(page.getByText("InstallationWriting")).toBeVisible();
  await page.getByRole("button", { name: "Getting Started" }).click();
  await expect(page.getByText("InstallationWriting")).toBeHidden();
  await page.getByRole("button", { name: "Getting Started" }).click();
  await expect(page.getByText("InstallationWriting")).toBeVisible();
});

test(
  "PL 02 Search some value",
  {
    tag: ["@positive"],
    annotation: {
      type: "description",
      description: "This is test case for searching some value",
    },
  },

  async ({ page }) => {
    await page.goto("https://playwright.dev/docs/intro");
    await expect(page.getByLabel("Search (Command+K)")).toContainText("Search");
    await page.getByRole("button", { name: "Search (Command+K)" }).click();
    await page
      .getByRole("searchbox", { name: "Search" })
      .fill("writing first test");
    await expect(page.locator("#docsearch-hits0-item-0")).toContainText(
      "First test"
    );
    await page.getByRole("link", { name: "First test Writing tests" }).click();
  }
);
