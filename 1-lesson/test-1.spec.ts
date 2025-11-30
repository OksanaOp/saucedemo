//CDP - Chrome DevTools Protocol - протокол для взаємодії плейварайту з браузером

//Puppeteer - бібліотека

//Playwright

import { chromium } from "@playwright/test";

import test from "node:test";

//основні обєкти: browser, context, page

// test("run browser", async ({ page, baseURL }) => {
//   console.log(baseURL);
//   const browser = await chromium.launch({ headless: false });
//   console.log(1);
//   const context = await browser.newContext(); // через контекст можна користуватись кількома табами розуміє хто ти в межах тих всіх таб (куки,кеш,сесії)
//   console.log(1);
//   const page1 = await browser.newPage(); //відповідає за то що модна робити в межах таби на сторіці

//   await page.goto();
//   await page.locator();
// });

//fixture - підготовлений кусок даниз який потім буде викор в тестах ( перед тестом або після тесту)

//DRY - DON'T REPEAT YOURSELF

test("run page", async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await browser.newPage();

  // не використов $,$$, click, fill, type
  // ElementHandle
  await page.click("[data-testId=ok]");

  // Locator -завжди викор локатор

  await page.locator("css selector, xpath").click();

  // method getBy  має 7 методів - також повертає локатор
  await page.getByRole("button").click();
});

//////////
// CDP - Chrome DevTool Protocol

// Puppeteer
// Playwright

// DRY - don`t repeat your self

// test("run browsers", async ({ page, baseURL }) => {
//   console.log(baseURL);
//   const browser = await chromium.launch({ headless: false });
//   console.log(1);
//   const context = await browser.newContext();

//   const page1 = await browser.newPage();
//   const page2 = await browser.newPage();

//   const page3 = await context.newPage();
//   const page4 = await context.newPage();
// });

test("test page", async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await browser.newPage();

  // ElementHandle
  await page.click('[data-testid = "Ok"]');
  await page.$("");
  await page.$$("");
  await page.fill("1", "as");

  // Locator, getBy...
  await page.locator("css selector, xpath").click();
  await page.getByRole("button").click();

  //
  await page.getByRole("button").click({ clickCount: 10 });
  await page.getByRole("button").dblclick();

  await page.getByRole("button").check();
  await page.getByRole("button").uncheck();

  await page.getByRole("button").selectOption(["blue"]);

  await page.locator("css selector, xpath").fill("this is my first fill");
  await page
    .locator("css selector, xpath")
    .pressSequentially("this is my first fill");
});

// групування тестів (запускати перед кожним тестом наприклад ордер кофі )

//test.describe("ordering", { tag: "@smoke" }, async () => {});

// паралельний запуск тестів
