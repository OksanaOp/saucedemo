import { test, expect, Page } from "@playwright/test";
import {
  clickOnCheckoutButton,
  clickOnMocha,
  clickOnSubmitButton,
  fillName,
  fillEmail,
  tickCheckbox,
} from "./pageActions.ts";
// option+ esc для імпорту фунції з екстепрнал модуля

test("TR-02 Purchase Mocha coffee", { tag: ["@smoke"] }, async ({ page }) => {
  const successMessageLocator = page.getByRole("button", {
    name: "Thanks for your purchase.",
  });
  await page.goto("https://coffee-cart.app/");
  await clickOnMocha(page);
  await clickOnCheckoutButton(page);
  await fillName(page, "Oksana");
  await fillEmail(page, "test@mail.co");
  await tickCheckbox(page);
  await clickOnSubmitButton(page);
  await expect(successMessageLocator).toBeVisible();
});
