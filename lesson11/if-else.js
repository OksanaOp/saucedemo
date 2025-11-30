console.log("Hi");

//if

/*оператори порівняння:
> 
<
>=
<=
!=
== - порівняння без врахування  типів
=== - порівняння з врахуванням типу
*/
const age = 22;
console.log(age >= 18);
console.log(age >= 18 && age < 21);
console.log(age < 18);
console.log(age >= 21);

if (age < 18) {
  console.log("проходь, коли виповниться 18");
}

if (age >= 18 && age < 21) {
  console.log("проходь, але алкоголь не продамо");
}

if (age >= 21) {
  console.log("проходь, і замовляй що зочеш");
}

//якщо temp <10 градусів -одягай куртку, якщо temp >10 градусів - одягай светер

let temp = 9;

if (temp <= 10) {
  console.log("одягай куртку");
} else {
  console.log("одягай светер");
}

/// else if

if (typeof age != "number") {
  throw Error("Pls provide correct data");
}

if (age < 18) {
  console.log("проходь, коли виповниться 18");
} else if (age >= 18 && age < 21) {
  console.log("проходь, але алкоголь не продамо");
} else if (age >= 21) {
  console.log("проходь, і замовляй що зочеш");
} else {
  throw Error("Pls provide correct data");
}

/*
якщо балів більше 75 - здав
якщо менше - не здав
*/

const mark = 100;
console.log(mark >= 75);
console.log(mark < 75);

if (typeof mark !== "number") {
  throw new Error("Invalid score: not a valid number");
}

if (mark >= 75 && mark <= 100) {
  console.log("Congratulation! You have passed the exam!");
} else if (mark < 75) {
  console.log("Sorry, You have failed the exam!");
} else if (mark > 100) {
  console.error("system error");
} else {
  throw Error("Pls provide correct data");
}

// інший варік розвязання
const studentScore = 75;

if (typeof studentScore !== "number") {
  throw new Error("Invalid score: not a valid number");
} else if (studentScore < 0 || studentScore > 100) {
  console.log("Invalid score: should be between 0 and 100");
} else if (studentScore >= 75) {
  console.log("Здав");
} else {
  console.log("Не здав");
}
