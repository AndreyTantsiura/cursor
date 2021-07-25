// 1. Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел. У функції є параметри: length - довжина масиву, min – мінімальне значення цілого числа, max – максимальне значення цілого числа. Приклад: getRandomArray(15, 1, 100) –> [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2]

function getRandomArray(length, min, max) {
  let resultArray = [];

  for (let i = 1; i <= length; i++) {
    resultArray.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }

  console.log("1) array: ", resultArray);
}
getRandomArray(15, 1, 100);

// 2. Створіть функцію getModa(...numbers) – яка вираховує моду всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
// Приклад: getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 2

function getModa(...numbers) {
  const arrIntegerNumber = numbers.filter((item) => Number.isInteger(item));
  const arrRepeatNumbers = [];
  let mode = null;
  let countRepeat = 1;

  arrIntegerNumber.sort((a, b) => a - b);
  arrIntegerNumber.forEach((item, index) => {
    if (item === arrIntegerNumber[index + 1]) {
      countRepeat++;
    } else {
      countRepeat = 1;
    }
    arrRepeatNumbers.push(countRepeat);
  });

  const maxCountRepeat = Math.max(...arrRepeatNumbers);

  arrRepeatNumbers.forEach((item, index) => {
    if (item === maxCountRepeat) {
      mode = arrIntegerNumber[index];
    }
  });

  console.log("2) mode = ", mode);
}

getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);

// 3. Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
// Приклад: getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 34.4

function getAverage(...numbers) {
  const arrIntegerNumber = [...numbers].filter((item) =>
    Number.isInteger(item)
  );
  let sum = 0;
  let avenger = 0;

  arrIntegerNumber.forEach((item) => {
    sum += item;
    avenger = sum / arrIntegerNumber.length;
  });

  console.log("3) avenger: ", avenger);
}

getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);

// 4. Створіть функцію getMedian(...numbers) – яка рахує медіану всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
// Приклад: getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 23 Приклад: getMedian(1, 2, 3, 4) –> 2.5 Приклад: getMedian(1, 2, 3, 4, 5) –> 3

function getMedian(...numbers) {
  const arrIntegerNumber = [...numbers].filter((item) =>
    Number.isInteger(item)
  );
  let mediana = 0;

  arrIntegerNumber.sort((a, b) => a - b);

  for (let i = 0; i < arrIntegerNumber.length / 2; i++) {
    if (arrIntegerNumber.length % 2 !== 0) {
      mediana = arrIntegerNumber[i];
    } else {
      mediana = (arrIntegerNumber[i] + arrIntegerNumber[i + 1]) / 2;
    }
  }

  console.log("4) mediana = ", mediana);
}

getMedian(1, 2, 3, 4, 5);

// 5. Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа передані як аргументи функції
// Приклад: filterEvenNumbers(1, 2, 3, 4, 5, 6) -> [1, 3, 5]

function filterEvenNumbers(...numbers) {
  const evenNumbers = numbers.filter((number) => number % 2 !== 0);
  console.log("5) evenNumbers: ", evenNumbers);
}

filterEvenNumbers(1, 2, 3, 4, 5, 6);

// 6. Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел більших 0
// Приклад: countPositiveNumbers(1, -2, 3, -4, -5, 6) -> 3

function countPositiveNumbers(...numbers) {
  const positiveNumbers = numbers.filter((number) => number > 0);
  const amountPositiveNumbers = positiveNumbers.length;
  console.log("6) amountPositiveNumbers: ", amountPositiveNumbers);
}

countPositiveNumbers(1, -2, 3, -4, -5, 6);

// 7. Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5
// Приклад: getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) -> [55, 55]

function getDividedByFive(...numbers) {
  const allNubers = [...numbers];
  const resultNumbers = allNubers.filter((number) => number % 5 === 0);
  console.log("7) resultNumbers: ", resultNumbers);
}

getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);

// 8. Створіть функцію replaceBadWords(string) – яка 1) розіб'є фразу на слова, 2) замінить погані слова на зірочки (*). При вирішенні цього завдання необхідно розбити масив на слова за допомогою функції .split(" "), після чого масив необхідно буде склеїти .join(" ") Погані слова: shit та fuck. Передбачте можливість розширювати список цих слів у майбутньому.
// Приклад: replaceBadWords("Are you fucking kidding?") -> "Are you ****ing kidding?" Приклад: replaceBadWords("Holy shit!") -> "Holy ****!" Приклад: replaceBadWords("It's bullshit!") -> "It's bull****!"

function replaceBadWords(string) {
  let censoredString = string.toLowerCase().split(" ").join(" ");
  let badWords = ["shit", "fuck"];
  const censorWord = "****";

  badWords.forEach((item, index) => {
    censoredString = censoredString.replaceAll(badWords[index], censorWord);
  });

  return censoredString;
}

replaceBadWords("Are you fucking kidding? Holy shit! It's bullshit!");

// 9. Створіть функцію divideByThree(word), яка розбиває кожне слово на умовні склади по 3 букви. Якщо букв менше трьох – не розбиває. Пробіли завжди видаляються. Рядок приводится до нижнього регістру. Приклад: divideByThree("Commander) -> ["com", "man", "der"] Приклад: divideByThree("live") -> ["liv", "e"]

function divideByThree(word) {
  const arrayLetters = word.toLowerCase().replace(" ", "").split("");
  const syllables = [];

  for (let i = 0; i < arrayLetters.length; i += 3) {
    syllables.push(arrayLetters.slice(i, i + 3).join(""));
  }

  console.log("9) syllables:", syllables);
}

divideByThree("Commander");

// 10. Створіть функцію generateCombinations(word), яка видасть всі можливі перестановки(унікальні, без повторень) букв в слові. Для тестів не передавайте слова в яких більше 10 букв. Краще взагалі обмежити работу функції 10 буквами. Приклад: generateCombinations("man") -> ["man", "mna", "amn", "anm", "nam", "nma"] Приклад: generateCombinations("ol") -> ["ol", "lo"]

function generateCombinations(word) {
  if (word.length > 10) {
    return "the word is too long";
  }
  function permutation(word) {
    const letters = word.split("");
    let combinations = [];
    if (letters.length === 1) return letters.join(" ");

    for (let i = 0; i < letters.length; i++) {
      const firstLetter = letters[i];
      const restLetters = letters.slice(0, i).concat(letters.slice(i + 1));
      const restLettersCombinations = permutation(restLetters.join(""));

      for (let j = 0; j < restLettersCombinations.length; j++) {
        const combinationArray = [firstLetter].concat(
          restLettersCombinations[j]
        );
        let newWord = combinationArray.join("");
        if (combinations.includes(newWord)) continue;
        else combinations.push(newWord);
      }
    }

    return combinations;
  }
  return `${permutation(word)}`;
}

console.log("task 10", "generate combinations", generateCombinations("man"));
