// 1. Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел. У функції є параметри: length - довжина масиву, min – мінімальне значення цілого числа, max – максимальне значення цілого числа. Приклад: getRandomArray(15, 1, 100) –> [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2]

function getRandomArray(length, min, max) {
  let array = [];
  min = Math.ceil(min);
  max = Math.floor(max);
  for (let i = 1; i <= length; i++) {
    array.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  console.log('array: ', array)
}
getRandomArray(15, 1, 100);

// 2. Створіть функцію getModa(...numbers) – яка вираховує моду всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
// Приклад: getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 2

function getModa(...numbers) {
  const arr = [...numbers].filter((item) => Number.isInteger(item));
  let newArr = [];
  arr.forEach(function (item, index) {
    if(arr.indexOf(item) !== arr.lastIndexOf(item)) {
		newArr.push(item)
	 }

  });

  console.log('Moda: ', newArr);
}

getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);

// 3. Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
// Приклад: getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 34.4

function getAverage(...numbers) {
  const arr = [...numbers].filter((item) => Number.isInteger(item));
  let sum = 0;
  let avenger = 0;
  arr.forEach((item, index, arr) => {
    sum += item;
    avenger = sum / arr.length;
  });

  console.log('avenger: ', avenger);
}

getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);
