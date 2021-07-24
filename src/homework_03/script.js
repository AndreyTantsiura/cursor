// #1 Створити функцію getMaxDigit(number) – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі. Приклади: 1236 -> 6, 987 -> 9, 385 -> 8

export function getMaxDigit(number) {
  if (!Number.isInteger(number)) {
    return "This number not integer";
  }

  const numberAbs = Math.abs(number);
  const arrDigits = numberAbs.toString().split("");
  const arrNumber = [];

  for (let i = 0; i < arrDigits.length; i++) {
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

  return name[0].toUpperCase() + name.slice(1).toLowerCase();
}

// #4 Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати. (Податок = 18% + 1.5% -> 19.5%). Приклад: 1000 -> 805

function salaryWithoutTax(salary) {
  let taxSalary = (salary * 19.5) / 100;
  let freshCash = salary - taxSalary;

  return freshCash;
}

// #5 Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M. Приклад: getRandomNumber(1, 10) -> 5

function getRandomNumber(n, m) {
  const minNumber = Math.ceil(n);
  const maxNumber = Math.floor(m);

  return Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
}

// #6 Створити функцію, яка рахує скільки разів певна буква повторюється в слові. Приклад: countLetter("а", "Асталавіста") -> 4

function countLetter(word, latter) {
  let lettersWord = word.toLowerCase().split("");
  let countLatter = 0;

  for (let i = 0; i < lettersWord.length; i++) {
    if (lettersWord[i].toLowerCase() === latter.toLowerCase()) {
      countLatter++;
    }
  }

  return countLatter;
}

// #7 Створіть функцію, яка конвертує долари в гривні та навпаки в залежності від наявності символа $ або UAH в рядку. Приклад: convertCurrency("100$") -> 2500 грн. або convertCurrency("2500UAH") -> 100$
// Врахуйте, інші валюти не конвертуються, потрібно виводити помилку, і також регістр uah не має значення.

function convertCurrency(sum, val) {
  const currencyCode = val.toUpperCase();
  const currencyCourse = 28;
  let result = 0;

  if (currencyCode === "$") {
    result = sum * currencyCourse;
    return sum.toFixed(2) + " UAH";
  } else if (currencyCode === "UAH") {
    result = sum / currencyCourse;
    return result.toFixed(2) + " $";
  } else {
    return "ERROR";
  }
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
  const newWord = word.toLowerCase().replaceAll(letter.toLowerCase(), "");

  return newWord;
}

// #10 Створіть функцію, яка перевіряє, чи є слово паліндромом. Приклад: isPalyndrom("мадам") -> true, isPalyndrom("кокос") -> false, isPalyndrom("Я несу гусеня") -> true

function isPalyndrom(word) {
  const unitedWords = word.toLowerCase().split(" ").join("");
  const reverseUnitedWords = unitedWords.split("").reverse().join("");

  return unitedWords === reverseUnitedWords;
}

// #11 Створіть функцію, яка видалить з речення букви, які зустрічаються більше 1 разу. Приклад: deleteDuplicateLetter("Бісквіт був дуже ніжним") -> "сктдеим"

function deleteDuplicateLetter(sentence) {
  const sentenceToLowerCase = sentence.toLowerCase();
  let newSentence = "";

  for (let i = 0; i < sentenceToLowerCase.length; i++) {
    if (
      sentenceToLowerCase.indexOf(sentenceToLowerCase[i]) ===
      sentenceToLowerCase.lastIndexOf(sentence[i])
    ) {
      newSentence += sentenceToLowerCase[i];
    }
  }

  return newSentence;
}

function getResaltsAllFunctions() {
  return `Функція №1: ${getMaxDigit(-1278)}<br>
Функція №2: ${numberInPow(2, 3)}<br>
Функція №3: ${transformName("aNdrEy")}<br>
Функція №4: ${salaryWithoutTax(3000)}<br>
Функція №5: ${getRandomNumber(1, 10)}<br>
Функція №6: ${countLetter("Асталавіста", "а")}<br>
Функція №7: ${convertCurrency(100, "UaH")}<br>
Функція №8: ${getRandomPassword()}<br>
Функція №9: ${deleteLetters("a", "blablAbla")}<br>
Функція №10: ${isPalyndrom("Я несу гусенЯ")}<br>
Функція №11: ${deleteDuplicateLetter("Бісквіт був дуже ніжним")}<br>`;
}
document.body.innerHTML = getResaltsAllFunctions();
