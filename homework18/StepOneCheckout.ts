import { th } from "@faker-js/faker";
import { Page } from "@playwright/test";

export class StepOneCheckout {
  private page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  private async fillFirstName(firstName: string) {
    await this.page.locator('[data-test="firstName"]').fill(firstName);
  }

  private async fillLastName(lastName: string) {
    await this.page.locator('[data-test="lastName"]').fill(lastName);
  }

  private async fillZipCode(zipCode: string) {
    await this.page.locator('[data-test="postalCode"]').fill(zipCode);
  }

  fillForm = async (firstName: string, lastName: string, zipCode: string) => {
    await this.fillFirstName(firstName);
    await this.fillLastName(lastName);
    await this.fillZipCode(zipCode);
  };

  async cancelCheckout() {
    await this.page.locator('[id="cancel"]').click();
  }

  async continueCheckout() {
    await this.page.locator('[id="continue"]').click();
  }
}
