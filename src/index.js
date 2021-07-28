import _ from "lodash";
import {
  getMaxPrice,
  getSumAllNumber,
  getMaxDigit,
  pairIntoTeams,
  getRandomArray,
  getSubjects,
  ukraine,
  getMiddleTaxes,
  Student,
  ostap,
  getRandomColor,
  getRandomChinese,
  getPlanets,
  createIdGenerator,
  idGenerator,
} from "./modules.js";
import "../homework_13/style.css";

console.log("HW#1. Максимальне число =", getMaxPrice());
console.log("HW#2. Cума чисел = ", getSumAllNumber());
console.log("HW#3. Функція №1:", getMaxDigit(-1278));
console.log("HW#4. Function 1:", pairIntoTeams());
console.log("HW#5. 1) array:", getRandomArray(15, 1, 100));
console.log("HW#6. List subjects:", getSubjects());
console.log("HW#7.", getMiddleTaxes.call(ukraine, "ukraine"));
console.log("HW#8. Дані студента:", ostap.getInfo(Student));
console.log("HW#9. Random color:", getRandomColor());
getRandomChinese(4).then((data) => {
  console.log(`HW#11. ${data}`);
});
getPlanets();
createIdGenerator();
console.log("HW#14. idGenerator.next().value ->", idGenerator.next().value);
console.log("HW#14. idGenerator.next().value ->", idGenerator.next().value);
console.log("HW#14. idGenerator.next().value ->", idGenerator.next().value);
