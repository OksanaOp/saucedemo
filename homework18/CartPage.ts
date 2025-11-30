import { expect, Page } from "@playwright/test";

export class CartPage {
  private page: Page;
  //конструктор
  constructor(page: Page) {
    this.page = page;
  }

  async removeFromCartByTitle(title: string) {
    const cardContainer = this.page
      .locator('[data-test="cart-list"] div')
      .filter({ hasText: title })
      .nth(1);
    const locatorByTitle = title.toLocaleLowerCase().split(" ").join("-");
    const removeButtonLocator = cardContainer.locator(
      `[data-test="remove-${locatorByTitle}"]`
    );
    await removeButtonLocator.click();
    return cardContainer;
  }

  getPriceByTitle(title: string) {
    const cardContainer = this.page
      .locator('[data-test="cart-list"] div')
      .filter({ hasText: title })
      .nth(1);
    const priseSection = this.page.locator(
      '[data-test="inventory-item-price"]'
    );
    return priseSection.innerText();
  }
  checkout() {
    const checkoutButtonLocator = this.page.locator('[data-test="checkout"]');
    if (checkoutButtonLocator) {
      checkoutButtonLocator.click();
    }
  }
  continueShopping() {
    const continueShoppingButtonLocator = this.page.locator(
      '[data-test="continue-shopping"]'
    );
    continueShoppingButtonLocator.click();
  }
}
