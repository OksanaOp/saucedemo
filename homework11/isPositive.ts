export function isPositive(number: number) {
  if (typeof number === "number") {
    if (number > 0) {
      console.log("number is positive");
      return true;
    } else if (number === 0) {
      console.log("number is negative");
      return false;
    } else {
      console.log("number is negative");
      return false;
    }
  }
  // } else {
  //   throw Error("pls use number to check if it positive");
  // }
}
