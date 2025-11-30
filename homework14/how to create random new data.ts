const randomNumber = Math.floor(Math.random() * 10_000);
console.log(randomNumber);

function getRandom(r = 1_000_000) {
  return Math.floor(Math.random() * r);
}

const email1 = `test${getRandom()}@gmail.com`;
const email2 = `test${getRandom()}@gmail.com`;
const email3 = `test${getRandom()}@gmail.com`;
console.log(email1);
console.log(email2);
console.log(email3);
//
console.log(new Date().getTime());
