import { defineConfig, devices } from "@playwright/test";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  timeout: 190 * 1000,
  testDir: "./tests",
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: 1, // process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: "html",
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    // baseURL: "https://coffee-cart.app/",
    baseURL: process.env.BASEURL,

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    // trace: "on-first-retry",
    trace: "on",
    video: "retain-on-failure",
    screenshot: "only-on-failure",
    //очікування елемента після якоїсь дії 30 сек
    actionTimeout: 30 * 1000,
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "coffee-cart",
      testDir: "/coffee-cart(work1)",
      use: {
        ...devices["Desktop Chrome"],
        baseURL: "https://coffee-cart.app/",
      },
    },
    {
      name: "coffee-cart2",
      testDir: "/coffee-cart-css",
      use: {
        ...devices["Desktop Chrome"],
        baseURL: "https://coffee-cart.app/",
        testIdAttribute: "data-test",
      },
    },

    {
      name: "aria-attributes",
      testDir: "/aria-attributes",
      use: {
        ...devices["Desktop Chrome"],
        baseURL: "file:///Users/oksanaoprysk/Downloads/demo-aria.html",
      },
    },
    {
      name: "conduit",
      testDir: "/conduit",
      use: {
        ...devices["Desktop Chrome"],
        baseURL: "https://demo.learnwebdriverio.com",
      },
    },

    {
      name: "demoqa",
      testDir: "/demoqa",
      use: {
        ...devices["Desktop Chrome"],
        baseURL: "https://demoqa.com/",
      },
    },
    {
      name: "homework9",
      testDir: "/homework9",

      use: {
        ...devices["Desktop Chrome"],
        baseURL: "https://coffee-cart.app/",
      },
    },

    {
      name: "homework11",
      testDir: "/homework11",
      // use: {
      //   ...devices["Desktop Chrome"],
      //   //  baseURL: "https://coffee-cart.app/",
      // },
    },

    {
      name: "homework12",
      testDir: "/homework12",
      use: {
        ...devices["Desktop Chrome"],
        baseURL: "https://coffee-cart.app/",
      },
    },
    {
      name: "lesson12",
      testDir: "/lesson12",
      use: {
        ...devices["Desktop Chrome"],
        baseURL: "https://coffee-cart.app/",
      },
    },

    {
      name: "homework14",
      testDir: "/homework14",
      use: {
        ...devices["Desktop Chrome"],
        baseURL: "https://demo.learnwebdriverio.com/",
      },
    },
    {
      name: "homework15",
      testDir: "/homework15",
      use: {
        ...devices["Desktop Chrome"],
        baseURL: "https://demoqa.com/",
        launchOptions: {
          slowMo: 1000, //сповільгює роботу якщо сайт довго завантажується ( таймаути *3)
        },
      },
    },
    {
      name: "lesson16",
      testDir: "/lesson16",
      use: {
        ...devices["Desktop Chrome"],
        baseURL: "https://demo.learnwebdriverio.com/",
      },
    },
    {
      name: "oop-lecture",
      testDir: "/oop-lecture18",
      // testMatch: "",
      use: {
        ...devices["Desktop Chrome"],
        baseURL: "https://demo.learnwebdriverio.com/",
      },
    },
    {
      name: "homework18",
      testDir: "homework18",
      use: {
        ...devices["Desktop Chrome"],
        baseURL: "https://www.saucedemo.com/",
      },
    },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
