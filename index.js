const { type } = require("os");

function isOdd(number) {
  return number % 2 !== 0;
}
module.exports = isOdd;
