import _ from "lodash";
import {
  getMaxPrice,
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
} from "./modules.js";

document.body.innerHTML = `
HW#1. Максимальне число = ${getMaxPrice()};<br>
HW#3. Функція №1: ${getMaxDigit(-1278)};<br>
HW#4. Function 1: ${pairIntoTeams()};<br>
HW#5. 1) array: ${getRandomArray(15, 1, 100)};<br>
HW#6. List subjects: ${getSubjects()};<br>
HW#7. ${getMiddleTaxes.call(ukraine, "ukraine")};<br>
HW#8. Дані студента: ${ostap.getInfo(Student)};<br>
HW#9. Random color: ${getRandomColor()};<br>
HW#11. ${getRandomChinese(4).then(console.log)};<br>
`;
