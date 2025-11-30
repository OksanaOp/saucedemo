import { test, expect } from "@playwright/test";
const name = "John";
const email = "test@mail.com";
const currentAddress = "Shevchenka 11";
const permanentAddress = "Franka 12";

test(
  "Home8.1: Submit the form",
  {
    tag: ["@smoke"],
    annotation: {
      type: "description",
      description: "Positive case for submitting form",
    },
  },
  async ({ page }) => {
    const nameLocator = page.locator(`//*[@id="userName"]`); //назва nameInput
    const emailLocator = page.locator(`//*[@placeholder="name@example.com"]`);
    const currentAddressLocator = page.locator(`//*[@id="currentAddress"]`);
    const permanentAddressLocator = page.locator(`//*[@id="permanentAddress"]`);
    const submitLocator = page.locator(`//*[@id="submit"]`);
    const resultBlockLocator = page.locator(
      `//*[@class="border col-md-12 col-sm-12"]`
    );
    const resultNameLocator = page.locator(`//*[@id="name"]`);
    const resultEmailLocator = page.locator(`//*[@id="email"]`);
    const resultPermanentAddressLocator = page.locator(
      `//*[@id="output"]//*[@id="permanentAddress"]`
    );
    const resultCurrentAddressLocator = page.locator(
      `//*[@id="output"]//*[@id="currentAddress"]`
    );

    await page.goto("/text-box");
    await nameLocator.fill(name);
    await emailLocator.fill(email);
    await currentAddressLocator.fill(currentAddress);
    await permanentAddressLocator.fill(permanentAddress);
    await submitLocator.click();

    await expect(resultBlockLocator).toBeVisible();
    await expect(resultNameLocator).toHaveText(`Name:${name}`);
    await expect(resultEmailLocator).toHaveText(`Email:${email}`);
    await expect(resultPermanentAddressLocator).toHaveText(
      `Permananet Address :${permanentAddress}`
    );
    await expect(resultCurrentAddressLocator).toHaveText(
      `Current Address :${currentAddress}`
    );
  }
);

test(
  "Home 8.2 Click all child checkboxes",
  {
    tag: ["@smoke"],
    annotation: {
      type: "description",
      description: "Positive case for submitting form",
    },
  },
  async ({ page }) => {
    const expandAllButtonLocator = page.locator(
      `//*[@class="rct-icon rct-icon-expand-all"]`
    );
    const resultLocator = page.locator(`//*[@id="result"]`);
    const checkboxNodes = page.locator(
      `//*[@class="rct-node rct-node-leaf"]//*[@class="rct-checkbox"]`
    );

    await page.goto("/checkbox");
    await expandAllButtonLocator.click();
    const countOfChildCheckboxes = await checkboxNodes.count();
    for (let i = 0; i < countOfChildCheckboxes; i++) {
      await checkboxNodes.nth(i).click();
    }
    await expect(resultLocator).toBeVisible();
  }
);

test(
  "Home 8.3 Click all radiobuttons",
  {
    tag: ["@smoke"],
    annotation: {
      type: "description",
      description: "Positive case for submitting form",
    },
  },
  async ({ page }) => {
    const noRadioButton = page.locator(`//*[@id="noRadio"]`);
    const impressiveRadioButton = page.locator('//*[@for="impressiveRadio"]');
    const yesRadioButton = page.locator(`//*[@for="yesRadio"]`);
    const selectedTitleLocator = page.locator(`//*[@class="mt-3"]`);
    const successMessage = page.locator(`//*[@class="text-success"]`);

    await page.goto("/radio-button");
    await noRadioButton.isDisabled();

    await impressiveRadioButton.check();
    await expect(impressiveRadioButton).toBeChecked();

    await expect(selectedTitleLocator).toContainText("You have selected ");
    await expect(successMessage).toContainText("Impressive");

    await yesRadioButton.click();
    await expect(yesRadioButton).toBeChecked();
    await expect(successMessage).toContainText("Yes");
    await expect(impressiveRadioButton).not.toBeChecked();
  }
);
