import { Page } from "@playwright/test";

export class LoginPage {
  private page: Page;
  //конструктор
  constructor(page: Page) {
    this.page = page;
  }

  private async fillUsername(username: string) {
    await this.page.locator('//input[@placeholder="Username"]').fill(username);
  }
  private async fillPassword(password: string) {
    await this.page.locator('//input[@placeholder="Password"]').fill(password);
  }
  private async clickSignUp() {
    await this.page.locator('[data-test="login-button"]').click();
  }

  login = async (username: string, password: string) => {
    await this.fillUsername(username);
    await this.fillPassword(password);
    await this.clickSignUp();
  };
}
