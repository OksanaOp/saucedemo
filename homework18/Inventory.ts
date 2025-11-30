import { expect, Locator, Page } from "@playwright/test";
import { title } from "process";

export class InventoryPage {
  private page: Page;
  //конструктор
  constructor(page: Page) {
    this.page = page;
  }

  async addToCartByTitle(title: string) {
    const locatorByTitle = title.toLocaleLowerCase().split(" ").join("-");
    const addToCartButton = this.page.locator(
      `[data-test="add-to-cart-${locatorByTitle}"]`
    );
    await addToCartButton.click();
  }

  getRemoveByTitle(title: string) {
    const locatorByTitle = title.toLocaleLowerCase().split(" ").join("-");
    return this.page.locator(`[data-test="remove-${locatorByTitle}"]`);
  }

  async checkIsRemovableByTitle(title: string) {
    const removeButton = this.getRemoveByTitle(title);
    await expect(removeButton).toContainText("Remove");
  }

  async removeFromCartByTitle(title: string) {
    const removeButton = this.getRemoveByTitle(title);
    if (removeButton) {
      removeButton.click();
    }
  }

  async getPriceByTitle(title: string) {
    const cardContainer = this.page
      .locator('[data-test="inventory-list"] div')
      .filter({ hasText: title })
      .nth(1);
    const priseSection = cardContainer.locator(
      '[data-test="inventory-item-price"]'
    );
    return priseSection.innerText();
  }
}
