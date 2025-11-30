export function votingAge(age: number) {
  if (age < 0 || age > 110) {
    return "system error";
  }

  if (age >= 18) {
    return "Ви можете голосувати.";
  }
  if (age < 18) {
    return "Ви ще не можете голосувати.";
  }
}
