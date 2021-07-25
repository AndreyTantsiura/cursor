import _ from "lodash";
import { maxPrice } from "./homework_01/script.js";
import { getMaxDigit } from "./homework_03/script.js";
import { pairIntoTeams } from "./homework_04/script.js";
import { replaceBadWords } from "./homework_05/script.js";
import { getSubjects } from "./homework_06/script.js";
import { ukraine, getMyTaxes } from "./homework_07/script.js";

document.body.innerHTML = `
1. const maxPrice from HW#1 => ${maxPrice};<br>
2. function getMaxDigit from HW#3 => ${getMaxDigit(-1239)};<br>
3. function pairIntoTeams from HW#4 => ${pairIntoTeams([
  "Олександр",
  "Ігор",
  "Олена",
  "Іра",
  "Олексій",
  "Світлана",
])};<br>
4. function replaceBadWords from HW#5 => ${replaceBadWords(
  "Are you fucking kidding? Holy shit! It's bullshit!"
)};<br>
5. function getSubjects from HW#6 => ${getSubjects({
  name: "Tanya",
  course: 3,
  subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4],
  },
})};<br>
6. function getMyTaxes fron HW#7 => ${getMyTaxes(ukraine, 1500, "ukraine")}
`;
