import { Page } from "@playwright/test";
//КЛАСИ
//модифікатори доступу -наслідування, інкапсуляція, (private, public,protected, readonly)
//синтаксичний цукор (class)

export class BasePage {
  protected page: Page;
  constructor(page: Page) {
    this.page = page;
  }
}

export class RegistrationPage extends BasePage {
  // private page: Page;
  readonly url: string = "https://demo.learnwebdriverio.com/register";
  //конструктор
  constructor(page: Page) {
    super(page);
  }

  private async clickOnRegisterLink() {
    await this.page.locator('//a[@href="/register"]').click();
  }
  private async fillUsername(username: string) {
    await this.page.locator('//input[@placeholder="Username"]').fill(username);
  }
  private async fillEmail(email: string) {
    await this.page.locator('//input[@placeholder="Email"]').fill(email);
  }

  private async fillPassword(password: string) {
    await this.page.locator('//input[@placeholder="Password"]').fill(password);
  }
  private async clickSignUp() {
    await this.page.getByRole("button", { name: "Sign up" }).click();
  }

  register = async (username: string, email: string, password: string) => {
    await this.fillUsername(username);
    await this.fillEmail(email);
    await this.fillPassword(password);
    await this.clickSignUp();
  };

  // this.consoleLogThis = () => console.log(this);
}
