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
  study: () => console.log("Im studying"),
  getMyDiploma: () => student.diplomas,
};

console.log(typeof student);

console.log(student);

for (const key in student) {
  console.log(student[key]);
  console.log(student.getMyDiploma());
  console.log(student.study());
}
