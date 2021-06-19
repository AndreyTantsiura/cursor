const students = [
  {
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4],
    },
  },
  {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5],
    },
  },
  {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5],
    },
  },
];

// #1. Створіть функцію getSubjects(students[0] --> ["Math", "Algorithms", "Data science"] - яка повертає список предметів для конкретного студента. Зверніть увагу – назву предмету необхідно повертати з великої літери, а _ – замінити на пробіл

function getSubjects(student) {
  if (!student) {
    console.log("student is absent");
  }

  let listSubjects = Object.keys(student.subjects);

  listSubjects = listSubjects.map((item) => {
    return item.charAt(0).toUpperCase() + item.slice(1).replaceAll("_", "-");
  });

  console.log("List subjects:", listSubjects);
}

const firstStudent = students[0];
getSubjects(firstStudent);

// #2. Створіть функцію getAverageMark(students[0]) --> 3.79 – яка поверне середню оцінку по усім предметам для переданого студента НЕ МАСИВА СТУДЕНТІВ. Оцінку округліть до 2ого знаку. Можна використовувати функції, написані у попередніх домашніх завданнях :)

function getAverageMark(student) {
  if (!student) {
    console.log("student is absent");
  }
  let sumMarks = 0;
  let averageMark;
  let marksSubjects = Object.values(student.subjects).flat();

  for (let i = 0; i < marksSubjects.length; i++) {
    sumMarks += marksSubjects[i];
    averageMark = (sumMarks / marksSubjects.length).toFixed(2);
  }

  console.log("Average mark =", averageMark);
}

const secondSdudent = students[1];
getAverageMark(secondSdudent);

// #3. Створіть функцію getStudentInfo(students[0]) --> { "course": 3, "name": "Tanya", "averageMark": 3.79} – яка повертає інформацію загального виду по переданому студенту (вам знадобиться функція з попереднього завдання). ПОвинна бути виведена інформація: курс, ім'я, середня оцінка.

function getStudentInfo() {

  console.log()
}

getStudentInfo()

// #4. Ствроіть функцію getStudentsNames(students) --> ["Anton", "Tanya, "Victor"] – яка повертає імена студентів у алфавітному порядку.

// #5. Створіть функцію getBestStudent(students) --> "Anton" – яка повертає кращого студента зі списку по показнику середньої оцінки.

// #6. Створіть функцію calculateWordLetters("тест") --> { "т": 2, "е": 1, "с": 1 } – яка повертає обє'кт, в якому ключі це букви у слові, а значення – кількість їх повторень.
