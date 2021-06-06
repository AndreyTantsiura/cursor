// (!) Домашнє завдання потрібно здавати у вигляді сторінки на GITPAGES. Відео про те, як здавати ДЗ
// Необхідно написати програму, яка виконує складання чисел від N до M (N та M – задаються користувачем), а також програма має вміти пропускати парні числа. Нижче приведено алгоритм, що потрібно зробити.
// (!) При виводі суми можна використовувати функції console.log или document.writeln
// Отримайте у користувача число(N) від якого ми будемо складати. Отримати число можна за допомогою prompt. Пам'ятайте, ЧИСЛО, не РЯДОК!
// Перевірте, чи є передане значення N ЦІЛИМ числом. (Підказка: якщо при конвертації в ціле число ми отримали NaN – це число нам не підходить)
// Отримайте у користувача число(M) до якого ми будемо складати (включно). Отримати число можна за допомогою prompt. Пам'ятайте, ЧИСЛО, не РЯДОК!
// Перевірте, чи є передане значення M ЦІЛИМ числом. (Підказка: якщо при конвертації в ціе число ми отримали NaN – це число нам не підходит)
// Отримайте у користувача булевий параметр(true/false), який підкаже нам чи потрібно пропускати парні числа. TRUE – потрібно, FALSE – не потрібно. Використовуйте функцію confirm
// Напишіть цикл, який буде складати числа від раніше отриманих N и M
// В циклі додайте перевірку – чи потрібно пропускати при складанні парні числа. (Використовуйте для цього if/else). Якщо парні числа потрібно пропускати не додавайте їх до суми.
// Виведіть результат
// Приклад: користувач ввів такі значення для N=10, M=100, ПропускатиПарні=TRUE – сума чисел виведена на екрані буде === 2475
// Приклад: користувач ввів такі значення для N=10, M=100, ПропускатиПарні=FALSE – сума чисел виведена на екрані буде === 5005
// Приклад: користувач ввів такі значення для N=1, M=10, ПропускатиПарні=FALSE – сума чисел виведена на екрані буде === 55

let sumNotEvenNumber = 0;
let sumAllNumber = 0;
do {
  N = +prompt("Введіть число N", "");
} while (!Number.isInteger(N) || isNaN(N) || N == "");
console.log("N:", N);

do {
  M = +prompt("Введіть число M", "");
} while (!Number.isInteger(M) || isNaN(M) || M == "");
console.log("M:", M);

const skipEvenNumber = confirm("Пропускати парні числа?");

for (var i = N; i <= M; i++) {
  if (i % 2 !== 0) {
    sumNotEvenNumber += i;
  }
  sumAllNumber += i;
}

if (skipEvenNumber) {
  alert(`Cума чисел = ${sumNotEvenNumber}`);
} else alert(`Cума чисел = ${sumAllNumber}`);
