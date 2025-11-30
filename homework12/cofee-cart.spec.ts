import { test, expect } from "@playwright/test";
import { clickOnFlatWhite } from "./pageActions";

test("TR -09 Extra coffee notification appears", async ({ page }) => {
  await page.goto("/");
  await clickOnFlatWhite(page);
  const notification = page.locator(".promo");
  await expect(notification).toContainText(
    "It's your lucky day! Get an extra cup of Mocha for $4."
  );
});
