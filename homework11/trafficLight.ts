/*
6. Дорога і світлофор
Якщо зелений — переходьте.
Якщо жовтий — підготуйтеся.
Якщо червоний — зачекайте.
Вхід: Колір світлофора (наприклад, "жовтий")
*/

export function trafficLightCheck(color: string) {
  if (color === "зелений") {
    return "Переходьте";
  }
  if (color === "жовтий") {
    return "підготуйтеся";
  }
  if (color === "червоний") {
    return "зачекайте";
  } else {
    return "system error";
  }
}
