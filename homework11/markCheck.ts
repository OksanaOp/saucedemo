/*
3. Перевірка оцінки
Якщо бал >= 50 — "Тест складено".
Якщо < 50 — "Тест не складено".
Вхід: Бал (наприклад, 42)
*/

export function markCheck(mark: number) {
  if (mark > 100 || mark < 0) {
    return "system error";
  }

  if (mark > 50 && mark <= 100) {
    return "Тест складено";
  }
  if (mark <= 50) {
    return "Тест не складено";
  }
}
