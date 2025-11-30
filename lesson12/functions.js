//const result = isExamPassed(79);
//console.log(result);

// function declaration
function sayHi() {
  console.log("Hello World");
}
sayHi();

var myVariable = "test";
let myLet = "let";
const myConst = "const";

//параметер/аргумент
// function isExamPassed(studentScore) {
//   if (typeof studentScore !== "number") {
//     throw new Error("Invalid score: not a valid number");
//   } else if (studentScore < 0 || studentScore > 100) {
//     return "Invalid score: should be between 0 and 100";
//   } else if (studentScore >= 75) {
//     return "Здав";
//   } else {
//     return "Не здав";
//   }
// }

/////  ф-ція у ф-ції

function getExamScore(username) {
  return Math.floor(Math.random() * 100); // floor - заокруглює, Math.random - повертає число від 0 до 1
}

const score = getExamScore("Oksana");
console.log(score);

function isExamPassed(studentScore) {
  if (studentScore() < 0 || studentScore() > 100) {
    return "Invalid score: should be between 0 and 100";
  } else if (studentScore() >= 75) {
    return "Здав";
  } else {
    return "Не здав";
  }
}

const res2 = isExamPassed(getExamScore);
console.log(res2);

////
function testReturn() {
  return; // весь код що після return не виконується
  console.log("this code goes after return");
}
