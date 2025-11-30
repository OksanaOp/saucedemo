// promise, async await, event loop

//асинхронніть / синхронність

//0=> 1=>2 =>3 =>4=>5 - черга (синхронність - наступна орепація виконується тільки тоді коли попередня операція виконалась)

// асинхронніть (можна одночасно виконувати операції)

//Promise - обєкт

const prom = new Promise((resolve, reject) => {
  const result = true;
  if (result) {
    resolve("Операція успішна");
  } else {
    reject("Операція провалена");
  }
});

prom.then((value) => console.log(value));

function prom1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Fast");
    }, 1000);
  });
}

function promMid() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Middle");
    }, 3000);
  });
}

function promSlow() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Slow");
    }, 5000);
  });
}

promSlow().then((value) => console.log(value));
promMid().then((value) => console.log(value));
prom1().then((value) => console.log(value));

//Promise.all()
const result = await Promise.all([
  promSlow(),
  promMid(),
  prom1(),
  Promise.reject("rejected"),
]);
console.log(result);
