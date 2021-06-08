// Створіть функцію, яка видаляє всі букви з речення. Приклад: deleteLetters('a', "blablabla") -> "blblbl"
// Створіть функцію, яка перевіряє, чи є слово паліндромом. Приклад: isPalyndrom("мадам") -> true, isPalyndrom("кокос") -> false, isPalyndrom("Я несу гусеня") -> true
// Створіть функцію, яка видалить з речення букви, які зустрічаються більше 1 разу. Приклад: deleteDuplicateLetter("Бісквіт був дуже ніжним") -> "сктдеим"

// #1 Створити функцію getMaxDigit(number) – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі. Приклади: 1236 -> 6, 987 -> 9, 385 -> 8

function getMaxDigit(number) {
  let arrDigits = number.toString().split("");
  let arrNumber = [];
  for (i = 0; i < arrDigits.length; i++) {
    arrNumber.push(+arrDigits[i]);
  }
  return Math.max(...arrNumber);
}

document.writeln(`Функція №1: ${getMaxDigit(1236)}<br>`);

// #2 Створити функцію, яка визначає ступінь числа. Не використовуючи Math.pow та **. Використовуйте цикл

function numberInPow(number, pow) {
  let result = 1;
  for (let i = 1; i <= pow; i++) {
    result *= number;
  }
  return result;
}

document.writeln(`Функція №2: ${numberInPow(2, 3)}<br>`);

// #3 Створити функцію, яка форматує ім'я, роблячи першу букву великою. ("влад" -> "Влад", "вЛАД" -> "Влад" і так далі);

function transformName(name) {
  name = name.toLowerCase();
  name = name.replace(name[0], name[0].toUpperCase());
  return name;
}

document.writeln(`Функція №3: ${transformName("aNDriY")}<br>`);

// #4 Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати. (Податок = 18% + 1.5% -> 19.5%). Приклад: 1000 -> 805

function salaryWithoutTax(salary) {
  let taxSalary = (salary * 19.5) / 100;
  let freshCash = salary - taxSalary;
  return freshCash;
}

document.writeln(`Функція №4: ${salaryWithoutTax(3000)}<br>`);

// #5 Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M. Приклад: getRandomNumber(1, 10) -> 5

function getRandomNumber(n, m) {
  min = Math.ceil(n);
  max = Math.floor(m);
  return Math.floor(Math.random() * (max - min)) + min;
}

document.writeln(`Функція №5: ${getRandomNumber(1, 10)}<br>`);

// #6 Створити функцію, яка рахує скільки разів певна буква повторюється в слові. Приклад: countLetter("а", "Асталавіста") -> 4

function countLetter(word, latter) {
  let lettersWord = word.toLowerCase().split("");
  let countLatter = 0;
  for (i = 0; i < lettersWord.length; i++) {
    if (lettersWord[i] === latter.toLowerCase()) {
      countLatter++;
    }
  }
  return countLatter;
}

document.writeln(`Функція №6: ${countLetter("Асталавіста", "а")}<br>`);

// #7 Створіть функцію, яка конвертує долари в гривні та навпаки в залежності від наявності символа $ або UAH в рядку. Приклад: convertCurrency("100$") -> 2500 грн. або convertCurrency("2500UAH") -> 100$
// Врахуйте, інші валюти не конвертуються, потрібно виводити помилку, і також регістр uah не має значення.

function convertCurrency(sum, val) {
  val = val.toUpperCase();
  let courseValue = 28;
  if (val === "$") {
    sum *= courseValue;
    return sum.toFixed(2) + " UAH";
  } else if (val === "UAH") {
    sum /= courseValue;
    return sum.toFixed(2) + " $";
  } else return "ERROR";
}

document.writeln(`Функція №7: ${convertCurrency(100, "UaH")}<br>`);

// #8 Створіть функцію генерації випадкового паролю (тільки числа), довжина встановлюється користувачем або по замовчуванню = 8 символам.
// Приклад: getRandomPassword(4) -> 1875, getRandomPassword() -> 87240124
