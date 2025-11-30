import { Page } from "@playwright/test";

export async function clickOnFlatWhite(page: Page) {
  for (let i = 1; i <= 3; i++) {
    const addFlatWhiteLocator = page.locator('[data-test="Flat_White"]');
    await addFlatWhiteLocator.click();
  }
}
