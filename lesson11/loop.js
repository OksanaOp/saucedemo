import validateHeaderValue from "validateHeaderValue";
// loop

//for

// for (let i = 0; i < 100; i++) {
//   await
// }

//while
let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

//do while

do {
  console.log(i);
  i++;
} while (i <= 10);

[1, 2, 3, 4, 5, 6, 7].forEach((value, index, arr) => {
  console.log(value);
  console.log(index);
  console.log(arr);
});

const arr = [2343, 4545, 4343, "sfd", true];
for (const elements of arr) {
  console.log(elements);
}

const obj = {
  a: 10,
  b: 100,
  c: 43434,
};

for (const key of obj) {
  console.log(key);
  console.log(obj.key);
}
