const func = function () {};
const name = "Oksana";
const obj = {};
const arr = [4, "string", [3, 4, "tt"], { age: 18 }, func, name, obj];

const students = ["Pavlo", "Luda", "Maryna"];
const colors = ["green", "yellow", "black", "white", "red", "pink"];
console.log(colors.length);

// отримати елемент масиву
console.log(students[2]);
console.log(colors[1]);

//ітерування (перебирання) масиву
// for, while, do while, for of
// найкраще викор цикли for , for of

for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}
