import { test, expect } from "@playwright/test";


test("TR-10 Success notification is displayed", async ({ page }) => {

const mochaLocator=page.locator('[data-test="Mocha"]');
const checkoutButtonLocator=page.locator('[data-test="checkout"]');
const nameInputLocator=page.getByRole("textbox", { name: "Name" });
const emailInputLocator=page.getByRole("textbox", { name: "Email" });
const checkboxLocator=page.getByRole("checkbox", { name: "Promotion checkbox" });
const submitButtonLocator=page.getByRole("button", { name: "Submit" });
const notificationLocator=page.getByRole("button", { name: "Thanks for your purchase." });

 await page.goto("https://coffee-cart.app/");

 for (let i=1;i<=10;i++){
  await mochaLocator.click();
 }
  await checkoutButtonLocator.click();
  await nameInputLocator.fill("test");
  await emailInputLocator.fill("test2@mail.co");
  await checkboxLocator.check();
  await submitButtonLocator.click();
  await expect(notificationLocator).toBeVisible();
});





test("TR-08 Delete all coffee in the cart via - [x] icon", async ({ page }) => {
  await page.goto("/");
  //await page.getByTestId("Cappuccino").click();
  await page.locator('[data-test="Cappuccino"]').click();
  await page.click('a[href="/cart"]');
  await page.locator(".delete").click();
  const messageLocator = page.locator(".list > p");
  await expect(messageLocator).toHaveText("No coffee, go add some.");

  const buttonLocator = page.locator('[data-test="Cappuccino"]');
  const randomVisibleButtonLocator = page.locator('a[href="/cart"]');
  const buttonVisibility = await randomVisibleButtonLocator.isVisible();

  //TODO: TRY TO GET RID OF IF/ELSE STATTEMENT
  if (buttonVisibility === true) {
    await randomVisibleButtonLocator.click();
  } else {
    await buttonLocator.click();
  }
});

test("TR-080 Delete all coffee in the cart via - [x] icon", async ({ page }) => {
  await page.goto("/");

 for (let i=0;i<100; i++){
  await page.locator('[data-test="Cappuccino"]').click();
 }
}

test("TR-0800 Delete all coffee in the cart via - [x] icon", async ({ page }) => {
  await page.goto("/");
let i=0;
 while(i<=10){
  await page.locator('[data-test="Cappuccino"]').click();
  i++;
 }
});
