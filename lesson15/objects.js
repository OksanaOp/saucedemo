const _ = require("lodash");
// об"єкти

const obj = {
  name: "Borys",
};

const arr = ["Borys"];
//індекс -0,1,2,...
//ключ
console.log(arr[0]);
console.log(obj.name);

// масиви ітерують по for of
for (const index of arr) {
}

//обєкти ітерують по for in
for (const index in obj) {
}

const student = {
  fullName: "Oksana Oprysk",
  age: 30,
  diplomas: [
    "Building and Architecture",
    "Physical Rehabilitation",
    "Management",
  ],
  //study: function(){}
  study: () => {
    console.log("Im studying");
  },
  getMyDiploma: () => student.diplomas,
};

console.log(typeof student);

console.log(student);

for (const key in student) {
  console.log(student[key]);
  console.log(student.getMyDiploma());
  console.log(student.study());
}

// методи обєкта
// map, forEach, find, filter, include

const coffee = [
  "Mocha",
  "Esspresso",
  "Capuccino",
  "Flat_White",
  "Americano",
  "Cafe_Latte",
];

//map метод в масив

coffee.map((value, index, arr) => {
  console.log(value);
  console.log(index);
  console.log(arr);
});

const newCoffee = coffee.map((value, index, arr) => {
  return value;
  //+ index + arr;
});

console.log(coffee);
console.log(newCoffee);

coffee.push("vodka");
console.log(coffee);
console.log(newCoffee);

/////
let original = "original";
let copyOriginal = original;
console.log(original);
console.log(copyOriginal);

///
const newCoffee1 = coffee;
console.log(coffee);
console.log(newCoffee1);

coffee.push("some drink");

console.log(coffee);
console.log(newCoffee1);

// копіювання обєкта: shallow copy, deep cope
const cat = {
  color: "grey",
  name: "murzik",
  owner: {
    name: "Oksana",
    isActive: true,
  },
};
// копіювання з викор rest оператора (shallow copy - поверхневе копіювання)
const catDog1 = { ...cat };
console.log(cat);
console.log(catDog1);

//
const catDog = cat;
console.log(cat);
console.log(catDog);
//створення властивості обєкта
cat["age"] = 2;

console.log(catDog);
//видалення властивості обєкта
delete cat.name;
console.log(catDog);

//присвоєння нового значення обєкту
cat.owner.isActive = false;
console.log(cat);
console.log(catDog);

// deep clone
const catDog2 = _.cloneDeep(cat);
console.log(cat);
console.log(catDog);
