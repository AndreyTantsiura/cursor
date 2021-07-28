//homework_01
export function getMaxPrice() {
  const apllePrice = 15.678;
  const pearsPrice = 123.965;
  const peachesPrice = 90.2345;
  const maxPrice = Math.max(apllePrice, pearsPrice, peachesPrice);
  return maxPrice;
}

//homework_02
export function getSumAllNumber() {
  let numberN = 0;
  let numberM = 0;
  let sumAllNumber = 0;
  do {
    numberN = 10;
  } while (!Number.isInteger(numberN) || isNaN(numberN) || numberN === "");
  do {
    numberM = 100;
  } while (!Number.isInteger(numberM) || isNaN(numberM) || numberM === "");
  const skipEvenNumber = true;
  for (let i = numberN; i <= numberM; i++) {
    if (!skipEvenNumber || i % 2) {
      sumAllNumber += i;
    }
  }
  return sumAllNumber;
}

//homework_03
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

//homework_04
export function pairIntoTeams(students) {
  students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
  const studentsTeams = [];
  const firstTeam = [students[0], students[2]];
  const fsecondTeam = [students[1], students[3]];
  const thirdTeam = [students[4], students[5]];

  studentsTeams.push(firstTeam, fsecondTeam, thirdTeam);

  return studentsTeams;
}

//homework_05
export function getRandomArray(length, min, max) {
  let resultArray = [];

  for (let i = 1; i <= length; i++) {
    resultArray.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }

  return resultArray;
}

//homework_06
export function getSubjects(student) {
  student = {
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4],
    },
  };
  let listSubjects = Object.keys(student.subjects);

  listSubjects = listSubjects.map((item) => {
    return item.charAt(0).toUpperCase() + item.slice(1).replaceAll("_", " ");
  });

  return listSubjects;
}

//homework_07
export const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
export function getMiddleTaxes(country) {
  const middleTax = (this.tax * this.middleSalary).toFixed(2);
  return `In ${country} middle tax = ${middleTax}`;
}

//homework_08
export class Student {
  constructor(university, course, fullName, marks, dismissed) {
    this.university = university;
    this.course = course;
    this.fullName = fullName;
    this.marks = marks;
    this.dismissed = dismissed;
  }

  getInfo() {
    if (this.dismissed) return null;
    return `Студент ${this.course}го курсу ${this.university}, ${this.fullName}`;
  }
}

export const ostap = new Student(
  "Вищої Школи Психотерапії м.Одеса",
  "1",
  "Остап Родоманський Бендер",
  [5, 4, 4, 5],
  false
);

//homework_09
export const getRandomColor = () => {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
};

//homework_11
export async function getRandomChinese(length) {
  let rowLength = "";

  for (let i = 0; i < length; i++) {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        const sign = Date.now().toString().slice(-5);
        const row = String.fromCharCode(sign);
        resolve(row);
      }, 50 * i);
    });
    rowLength += await promise;
  }

  return rowLength;
}

//homework_13
export function getPlanets() {
  const planetsList = document.createElement("div");
  planetsList.setAttribute("id", "planetsList");
  axios.get(`https://swapi.dev/api/films/2/`).then((response) => {
    const arrLinkPlanets = response.data.planets;
    arrLinkPlanets.map((item) => {
      return axios.get(item).then((response) => {
        const planets = response.data.name;
        planetsList.insertAdjacentHTML(
          "afterbegin",
          `<ul><li>${planets}</li></ul>`
        );
        document.body.append(planetsList);
      });
    });
  });
}

//homework_14
export function* createIdGenerator() {
  let i = 0;
  while (true) {
    i++;
    yield i;
  }
}
export const idGenerator = createIdGenerator();
