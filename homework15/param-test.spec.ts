import { faker } from "@faker-js/faker";
import { expect, Page, test } from "@playwright/test";

const mobile = Math.floor(Math.random() * 10000000000).toString();

const randomDate = faker.date.past({ refDate: new Date() }).toISOString();
const testData = [
  {
    id: 1,
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    mobile,
    address: faker.location.streetAddress(),
    dob: randomDate,
    gender: "Male",
    hobbies: ["Sports", "Music"],
    expect: async (page: Page) =>
      await expect(page.locator('[class="modal-content"]')).toBeVisible(),
  },
  {
    id: 2,
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    mobile,
    address: faker.location.streetAddress(),
    dob: randomDate,
    gender: "Female",
    hobbies: null,
    expect: async (page: Page) =>
      await expect(page.locator('[class="modal-content"]')).toBeVisible(),
  },
  {
    id: 3,
    firstName: null,
    lastName: null,
    email: faker.internet.email(),
    mobile,
    address: faker.location.streetAddress(),
    dob: randomDate,
    hobbies: ["Sports"],
    expect: async (page: Page) =>
      await expect(page.locator('[class="modal-content"]')).toBeVisible({
        visible: false,
      }),
  },
];

for (const data of testData) {
  test(`TS${data.id} Fill in form`, async ({ page }) => {
    await page.goto("/automation-practice-form");

    const {
      firstName,
      lastName,
      email,
      mobile,
      dob,
      gender,
      hobbies,
      address,
    } = data;

    if (firstName) {
      await page.getByRole("textbox", { name: "First Name" }).fill(firstName);
    }
    if (lastName) {
      await page.getByRole("textbox", { name: "Last Name" }).fill(lastName);
    }

    if (email) {
      await page.getByRole("textbox", { name: "name@example.com" }).fill(email);
    }

    if (gender) {
      await page.getByText(gender, { exact: true }).click();
    }

    if (mobile) {
      await page.getByRole("textbox", { name: "Mobile Number" }).fill(mobile);
    }

    if (hobbies && hobbies.length > 0) {
      for (let index = 0; index < hobbies.length; index++) {
        const hobby = hobbies[index];
        await page.getByText(hobby).click();
      }
    }

    if (dob) {
      await page.locator("#dateOfBirthInput").fill(dob);
      //закриває календар пікер
      await page
        .locator("#app div")
        .filter({ hasText: "Practice FormStudent" })
        .nth(3);
    }

    await page.getByRole("textbox", { name: "Current Address" }).fill(address);
    await page.getByRole("button", { name: "Submit" }).click();

    if (firstName && lastName && gender && mobile) {
      await expect(page.locator('[class="modal-content"]')).toBeVisible();
      await expect(
        page.getByRole("cell", { name: firstName + " " + lastName })
      ).toBeVisible();
      await expect(page.getByRole("cell", { name: email })).toBeVisible();
      await expect(page.getByRole("cell", { name: gender })).toBeVisible();
      await expect(page.getByRole("cell", { name: mobile })).toBeVisible();
    } else {
      await expect(page.locator('[class="modal-content"]')).not.toBeVisible();
    }
  });
}
