const product = {
  name: "Ноутбук",
  brand: "Dell",
  price: 2000,
  inStock: true,
};

const extended = {
  active: true,
  promotion: "20%",
};

console.log(Object.keys(product));
console.log(Object.values(product));
console.log(Object.entries(product));

//обєднання 2-х обєктів:

// створити копію з декількох обєктів: за допомогою REST оператор
const concatObj = { ...product, ...extended };
// створити копію з декількох обєктів:
//але це вже буде інший обєкт який є обєднанням 2=х інших
console.log(concatObj);

//обєднання обєктів за допомогою assign
const objAssgn = Object.assign({}, product, extended);
console.log(objAssgn);

////пошук чи є такиа проперті в обєкті
console.log(Object.hasOwn(product, "brand"));
