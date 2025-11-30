import { test, expect } from "@playwright/test";
import { readFileSync } from "fs";
import { readFile } from "fs/promises";

test("Home3.1.1 Log in with empty fields", async ({ page }) => {
  await page.goto("");
  await page.locator("#app").click();

  const content = await readFile("tests/coffee-cart/file.txt", {
    encoding: "utf8",
  });

  const contSync = readFileSync("tests/coffee-cart/file.txt", {
    encoding: "utf8",
  });

  console.log(contSync);
  console.log(content);
});
