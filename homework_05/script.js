// 1. Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел. У функції є параметри: length - довжина масиву, min – мінімальне значення цілого числа, max – максимальне значення цілого числа. Приклад: getRandomArray(15, 1, 100) –> [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2]

function getRandomArray(length, min, max) {
  let resultArray = [];
  const minNumber = Math.ceil(min);
  const maxNumber = Math.floor(max);
  for (let i = 1; i <= length; i++) {
    resultArray.push(
      Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber
    );
  }
  console.log("array: ", resultArray);
}
getRandomArray(15, 1, 100);

// 2. Створіть функцію getModa(...numbers) – яка вираховує моду всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
// Приклад: getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 2

function getModa(...numbers) {
  const arrIntegerNumber = [...numbers].filter((item) =>
    Number.isInteger(item)
  );
  let newArr = [];
  arrIntegerNumber.forEach(function (item, index) {
    if (arrIntegerNumber.indexOf(item) !== arrIntegerNumber.lastIndexOf(item)) {
      newArr.push(item);
    }
  });

  console.log("moda: ", newArr);
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
  arrIntegerNumber.forEach((item, index, arr) => {
    sum += item;
    avenger = sum / arrIntegerNumber.length;
  });

  console.log("avenger: ", avenger);
}

getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);

// 4. Створіть функцію getMedian(...numbers) – яка рахує медіану всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
// Приклад: getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 23 Приклад: getMedian(1, 2, 3, 4) –> 2.5 Приклад: getMedian(1, 2, 3, 4, 5) –> 3

function getMedian(...numbers) {
  const arrIntegerNumber = [...numbers].filter((item) =>
    Number.isInteger(item)
  );
  let mediana = 0;

  arrIntegerNumber.sort(function (a, b) {
    return a - b;
  });

  for (let i = 0; i < arrIntegerNumber.length / 2; i++) {
    if (arrIntegerNumber.length % 2 !== 0) {
      mediana = arrIntegerNumber[i];
    } else {
      mediana = (arrIntegerNumber[i] + arrIntegerNumber[i + 1]) / 2;
    }
  }

  console.log("mediana = ", mediana);
}

getMedian(1, 2, 3, 4, 5);

// 5. Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа передані як аргументи функції
// Приклад: filterEvenNumbers(1, 2, 3, 4, 5, 6) -> [1, 3, 5]

function filterEvenNumbers(...numbers) {
  const allNubers = [...numbers];
  const evenNumbers = allNubers.filter((number) => number % 2 !== 0);

  console.log("evenNumbers: ", evenNumbers);
}

filterEvenNumbers(1, 2, 3, 4, 5, 6);

// 6. Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел більших 0
// Приклад: countPositiveNumbers(1, -2, 3, -4, -5, 6) -> 3

function countPositiveNumbers(...numbers) {
  const allNubers = [...numbers];
  const positiveNumbers = allNubers.filter((number) => number > 0);
  const amountPositiveNumbers = positiveNumbers.length;

  console.log("amountPositiveNumbers: ", amountPositiveNumbers);
}

countPositiveNumbers(1, -2, 3, -4, -5, 6);

// 7. Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5
// Приклад: getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) -> [55, 55]

function getDividedByFive(...numbers) {
  const allNubers = [...numbers];
  const resultNumbers = allNubers.filter((number) => number % 5 === 0);
  console.log("resultNumbers: ", resultNumbers);
}

getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);

// 8. Створіть функцію replaceBadWords(string) – яка 1) розіб'є фразу на слова, 2) замінить погані слова на зірочки (*). При вирішенні цього завдання необхідно розбити масив на слова за допомогою функції .split(" "), після чого масив необхідно буде склеїти .join(" ") Погані слова: shit та fuck. Передбачте можливість розширювати список цих слів у майбутньому.
// Приклад: replaceBadWords("Are you fucking kidding?") -> "Are you ****ing kidding?" Приклад: replaceBadWords("Holy shit!") -> "Holy ****!" Приклад: replaceBadWords("It's bullshit!") -> "It's bull****!"

function replaceBadWords(string) {
  const arrayWords = string.split(" ").join(" ");

  console.log("1) ", arrayWords);
}

replaceBadWords("Are you fucking kidding?");
