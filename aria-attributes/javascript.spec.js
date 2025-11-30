console.log("this is my js");

//ТИПИ ДАНИХ

//стрічка рядки , є імутабельні(не можуть змінюватись)
("test1");
("test2");
`test3`;

// для перенесення рядка викор символ \n

// для параментів
const id = "1234";

//test(`${id} test name`, { tag: "@smoke" }, async () => {});

let back = `''''' ${id}"
''''`;
console.log(back + "1");

// number

console.log(10 / 2);
console.log(10 + 2);
console.log(10 - 2);
console.log(10 * 2);
console.log(10 ** 2);

//додавання стрічки до числа
console.log(10 + "2");
console.log("10" + 2);

//NaN (not a number)

console.log("test" / 2);
console.log("test" * 2);

//BigInt

console.log(typeof 90078788787878787878787878n);
console.log(typeof 90078788787878787878787878);

//boolean

console.log(typeof true);
console.log(typeof false);

// null VS undefined
let o;
console.log(typeof o);

let n = null;
console.log(typeof n);

//Symbol

let sym = Symbol();
console.log(typeof sym);

//object

const obj = {
  test: "test",
  years: "33",
  name: "Oksa",
};

//array
console.log([1, "test", {}, true]);

// Infinity,NaN, object, function

console.log(typeof function () {});
console.log(isNaN("12345"));

//Типи змінних

//let
//console.log(thisIsMyFirstVariable);
let thisIsMyFirstVariable = "test";
console.log(thisIsMyFirstVariable);

thisIsMyFirstVariable = 100;
console.log(thisIsMyFirstVariable);

console.log(sum(1, 1));

//const
const thisIsMySecondVariable = 3.14;

//var
var thisIsVar = 12345;
console.log(thisIsVar);

// hoisting - підняття (let i const не піднімаються)

function sum(num1, num2) {
  return num1 + num2;
}

//область видимості
// глобальна

//функціональна

function sum2(num1, num2) {
  //функціональна
  return num1 + num2;
  const pi = 3.14;
}
//console.log(pi);

//блочна область видимості (коли умавні оператори або цикли)
const isActive = true;

if (isActive === true) {
  //блочна область
  const test = "1";
  console.log(test);
}

function sum(num1, num2) {
  let result = thisIsVar + thisIsVar;
  console.log(result);

  function minus(num1, num2) {
    let result = 1 + 1;
    return result;
  }
}
