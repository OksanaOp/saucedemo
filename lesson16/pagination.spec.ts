import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  const elementToFind = "Article-6-1762964854661";

  await page.goto("https://demo.learnwebdriverio.com/");

  let isVisible = false;
  for (let i = 1; 0 <= 3; i++) {
    if (isVisible) {
      break;
    }

    await page
      .locator(`[data-test="page-link-${i}"]`)
      .getByRole("link", { name: `${i}` })
      .click();

    try {
      await expect(page.getByRole("link", { name: elementToFind })).toBeVisible(
        {
          timeout: 500,
        }
      );
      isVisible = true;
    } catch (e) {}
  }
  await expect(page.getByRole("link", { name: elementToFind })).toBeVisible();
});
