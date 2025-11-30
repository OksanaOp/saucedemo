//label[text()='Name']/ancestor::div[contains(@class,'formHorizontalWrapper')]//input
//label[text()='Label']/ancestor::div[contains(@class,'formHorizontalWrapper')]//input
//label[text()='Number']/ancestor::div[contains(@class,'formHorizontalWrapper')]//input

//напишем ф-цію

//function getInputElementByLabel(label:"Name" | "Label" | "Number"){

//    return '//label[text() = '${label}']/ancestor::div[contains(@class,'formHorizontalWrapper')]//input`';
//};

//пошук локаторів по xpath викор Playwright можлтвості
import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  //label[text()='Number']/ancestor::div[contains(@class,'formHorizontalWrapper')]//input
  await page
    .locator("label", { hasText: "nUMBER" })
    .locator("/ancestor::div[contains(@class,'formHorizontalWrapper')]")
    .locator("input");
});

//якщо декілька локаторів елементів знайшлись то можна виьирати по номеру

test("test", async ({ page }) => {
  //label[text()='Number']/ancestor::div[contains(@class,'formHorizontalWrapper')]//input
  await page
    .locator("label", { hasText: "nUMBER" })
    .locator("/ancestor::div[contains(@class,'formHorizontalWrapper')]")
    .locator("input")
    .last.click();
});
