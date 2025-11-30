// стрілкові ф-ції не піднімаються (хоістінг не працює для стрілкових ф=цій)
// хоістінг- це виклик ф-цї перед оголошенням
// стрілкові ф-ції  не мають свого this

//sayHi();
//arrow function
const sayHiByName = (name, age, job) => {
  console.log(
    "Hello World " + name + `I'm ${age} years old, and working on ${job}`
  );
};

sayHiByName("Oksana", 30, "QA");

// анонімна ф-ція - це й-ція без ідентифікатора (без назви) за яким можна її викликати
// function(){
//     console.log('I am anonymous')
// }

// функціональний вираз - functional expression
const functionalExpression = function () {
  console.log("I am expression");
};

const cat = {
  meaw: () => {
    console.log("Meaw");
  },
  walk: () => {
    console.log("I am Walking");
  },
};

cat.meaw();
cat.walk();

////
function sum(a, b) {
  return a + b;
}
sum(3, 5);

function logSum(sum) {
  console.log(sum);
}
logSum(sum(1, 2));

////// виклик функції як аргумента
function sum(a, b) {
  return a + b;
}

function logSum(sum) {
  console.log(sum);
}

logSum(sum(1, 2));

// передача функції як аргумента і виклик її в середині іншої
function sum(a, b) {
  return a + b;
}

function logSum(sum) {
  console.log(sum(1, 2));
}

logSum(sum);

function sum3(a, b) {
  return a + b;
}

const sum4 = (a, b) => a * b;
console.log(sum3(1, 1));
console.log(sum4(2, 4));
