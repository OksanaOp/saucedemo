//ф-ція конструктор - так колись писали (тепер юзають класи див RegistrationPage2.ts file)
export function RegistrationPage(page) {
  this.page = page;
  this.clickOnRegisterLink = async () =>
    await page.locator('//a[@href="/register"]').click();
  this.fillUsername = async (username) =>
    await page.locator('//input[@placeholder="Username"]').fill(username);
  this.fillEmail = async (email) =>
    await page.locator('//input[@placeholder="Email"]').fill(email);
  this.fillPassword = async (password) =>
    await page.locator('//input[@placeholder="Password"]').fill(password);
  this.clickSignUp = async () =>
    await page.getByRole("button", { name: "Sign up" }).click();

  this.register = async (username, email, password) => {
    await this.fillUsername(username);
    await this.fillEmail(email);
    await this.fillPassword(password);
    await this.clickSignUp();
  };

  this.consoleLogThis = () => console.log(this);
}
