// #1 Створити функцію getMaxDigit(number) – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі. Приклади: 1236 -> 6, 987 -> 9, 385 -> 8

function getMaxDigit(number) {
  number = Math.abs(number);
  let arrDigits = number.toString().split(".").join("");
  let arrNumber = [];
  for (i = 0; i < arrDigits.length; i++) {
    arrNumber.push(+arrDigits[i]);
  }
  return Math.max(...arrNumber);
}

// #2 Створити функцію, яка визначає ступінь числа. Не використовуючи Math.pow та **. Використовуйте цикл

function numberInPow(number, pow) {
  let result = 1;
  if (!Number.isInteger(pow)) {
    return "pow is not integer";
  } else if (pow >= 0) {
    for (let i = 1; i <= pow; i++) {
      result *= number;
    }
    return result;
  } else if (pow < 0) {
    for (let i = 1; i <= -pow; i++) {
      result *= 1 / number;
    }
    return result;
  }
}

// #3 Створити функцію, яка форматує ім'я, роблячи першу букву великою. ("влад" -> "Влад", "вЛАД" -> "Влад" і так далі);

function transformName(name) {
  if (!isNaN(name)) {
    return "This not a name";
  }
  name = name.toLowerCase();
  name = name.replace(name[0], name[0].toUpperCase());
  return name;
}

// #4 Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати. (Податок = 18% + 1.5% -> 19.5%). Приклад: 1000 -> 805

function salaryWithoutTax(salary) {
  let taxSalary = (salary * 19.5) / 100;
  let freshCash = salary - taxSalary;
  return freshCash;
}

// #5 Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M. Приклад: getRandomNumber(1, 10) -> 5

function getRandomNumber(n, m) {
  min = Math.ceil(n);
  max = Math.floor(m);
  return Math.floor(Math.random() * (max - min)) + min;
}

// #6 Створити функцію, яка рахує скільки разів певна буква повторюється в слові. Приклад: countLetter("а", "Асталавіста") -> 4

function countLetter(word, latter) {
  let lettersWord = word.toLowerCase().split("");
  let countLatter = 0;
  for (i = 0; i < lettersWord.length; i++) {
    if (lettersWord[i].toLowerCase() === latter.toLowerCase()) {
      countLatter++;
    }
  }
  return countLatter;
}

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

// #8 Створіть функцію генерації випадкового паролю (тільки числа), довжина встановлюється користувачем або по замовчуванню = 8 символам.
// Приклад: getRandomPassword(4) -> 1875, getRandomPassword() -> 87240124

function getRandomPassword(amountSymbol = 8) {
  if (isNaN(amountSymbol) || amountSymbol <= 0) {
    return "Is not correct";
  }
  let password = "";
  for (let i = 1; i <= amountSymbol; i++) {
    password += Math.floor(Math.random() * 10);
  }
  return password;
}

// #9 Створіть функцію, яка видаляє всі букви з речення. Приклад: deleteLetters('a', "blablabla") -> "blblbl"

function deleteLetters(letter, word) {
  let newWord = "";
  for (let i = 0; i < word.length; i++) {
    if (letter.toLowerCase() !== word[i].toLowerCase()) {
      newWord += word[i];
    }
  }
  return newWord;
}

// #10 Створіть функцію, яка перевіряє, чи є слово паліндромом. Приклад: isPalyndrom("мадам") -> true, isPalyndrom("кокос") -> false, isPalyndrom("Я несу гусеня") -> true

function isPalyndrom(word) {
  word = word.split(" ").join("");
  let reversWord = "";
  for (let i = word.length - 1; i >= 0; i--) {
    reversWord += word[i];
  }
  if (word.toLowerCase() === reversWord.toLowerCase()) return true;
  else return false;
}

// #11 Створіть функцію, яка видалить з речення букви, які зустрічаються більше 1 разу. Приклад: deleteDuplicateLetter("Бісквіт був дуже ніжним") -> "сктдеим"

function deleteDuplicateLetter(sentence) {
  sentence = sentence.toLowerCase();
  let newSentence = "";
  for (let i = 0; i < sentence.length; i++) {
    if (sentence.indexOf(sentence[i]) === sentence.lastIndexOf(sentence[i]))
      newSentence += sentence[i];
  }
  return newSentence;
}

function getResaltsAllFunctions() {
  return `Функція №1: ${getMaxDigit(-127.8)}<br>
Функція №2: ${numberInPow(2, 3)}<br>
Функція №3: ${transformName("Andrey")}<br>
Функція №4: ${salaryWithoutTax(3000)}<br>
Функція №5: ${getRandomNumber(1, 10)}<br>
Функція №6: ${countLetter("Асталавіста", "а")}<br>
Функція №7: ${convertCurrency(100, "UaH")}<br>
Функція №8: ${getRandomPassword()}<br>
Функція №9: ${deleteLetters("a", "blablAbla")}<br>
Функція №10: ${isPalyndrom("Я несу гусеня")}<br>
Функція №11: ${deleteDuplicateLetter("Бісквіт був дуже ніжним")}<br>`;
}
document.writeln(getResaltsAllFunctions());
