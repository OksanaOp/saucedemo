import { test } from "@playwright/test";

test("TR-02 Purchase  2 the same coffee", async ({ page }) => {
  await page.goto("/");

  const coffee = [
    "Mocha",
    "Esspresso",
    "Capuccino",
    "Flat_White",
    "Americano",
    "Cafe_Latte",
  ];
  //   await page.locator('[data-test="Mocha"]').click();
  //   await page.locator('[data-test="Esspresso"]').click();
  //   await page.locator('[data-test="Capuccino"]').click();
  //   await page.locator('[data-test="Flat_White"]').click();
  //   await page.locator('[data-test="Americano"]').click();
  //   await page.locator('[data-test="Cafe_Latte"]').click();

  // for (let i=0;i<coffee.length,i++){
  //     await page.locator(`[data-test="${coffee[i]}"`).click();
  // }

  for (const drink of coffee) {
    console.log(drink);
    await page.locator(`[data-test="${drink}"`).click();
  }

  //    for (const drink of Object.entries(coffee)){

  //    }
  // });

  // helper /polyfile(поліфіли)
  coffee.push("Large Late");
  console.log(coffee);

  // додавання в масив 
  const names = [];
  for (const drink of coffee) {
    const name = await page
      .locator(`[data-test="${drink}"]`)
      .getAttribute("aria-label");
    names.push(name);
  }

// зменшення масиву (видалення по останньому елементу)
 const names2 = [];
  for (const drink of coffee) {
    coffee.pop();
  console.log(coffee);
  
for (let i=coffee.length-1; i>=0;i--){
    console.log(coffee[i]);
    coffee.pop();
}

//метод find - шукає чи елемент масиву
// const result= console.log(coffee.find((value)=>{
//     console.log(result)
// }))
const result= console.log(coffee.find((value)=>{value ==='Flat White'}))

//метод includes - перевіряє чи такий елемент в масиві взагалі є

console.log(coffee.includes('Test'))
// можна вказувати після якого індекса шукати елемент тест
console.log(coffee.includes('Test',4))


// index of - повертає індекс елемента масиву
console.log(coffee.indexOf('Mocha'))


// forEach
coffee.forEach((value,index,arr)=>{
    arr[index] = value + 1
})

});
