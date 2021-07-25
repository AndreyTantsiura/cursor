const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = [
  "Диференційне рівняння",
  "Теорія автоматів",
  "Алгоритми і структури даних",
];
const marks = [4, 5, 5, 3, 4, 5];

// #1 Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом. У вас повинен вийти вкладений масив з парами студентів: [["Олександр", "Олена"], [..], [...]];

 export function pairIntoTeams(students) {
  const studentsTeams = [];
  const firstTeam = [students[0], students[2]];
  const fsecondTeam = [students[1], students[3]];
  const thirdTeam = [students[4], students[5]];

  studentsTeams.push(firstTeam, fsecondTeam, thirdTeam);

  return studentsTeams;
}
const pairsTeams = pairIntoTeams(students);
console.log("Function 1:", pairsTeams);

// #2 Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати. Повинен вийти вкладений масив виду: [["Олександр і Олена", "Теорія автоматів"], [...], [...]]

function teamsConcatWithThemes(pairTeam) {
  const teamsConcatThemes = [];

  for (let i = 0; i < pairTeam.length; i++) {
    teamsConcatThemes.push([pairTeam[i].join(" i "), themes[i]]);
  }

  return teamsConcatThemes;
}
const teamsWithThemes = teamsConcatWithThemes(pairsTeams);
console.log("Function 2:", teamsWithThemes);

// #3 Зіставте оцінки(marks) зі студентом(students): [["Саша", 4], [...], [...]]

function studentsConcatWithMarks(students) {
  const studentsMarks = [];

  for (let i = 0; i < students.length; i++) {
    studentsMarks.push([students[i], marks[i]]);
  }

  return studentsMarks;
}
const studentsWithMarks = studentsConcatWithMarks(students);
console.log("Function 3:", studentsWithMarks);

// #4 Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт(тут функція буде нечистою, але не повинна мутувати массив): [["Олександр і Олена", "Теорія автоматів", 5], [...], [...]]

 function teamsThemesConcatMarks(teamsWithThemes, pairsTeams) {
  const teamsThemesMarks = [];

  for (let i = 0; i < teamsWithThemes.length; i++) {
    teamsThemesMarks.push([
      pairsTeams[i].join(" i "),
      themes[i],
      Math.floor(Math.random() * 5) + 1,
    ]);
  }

  return teamsThemesMarks;
}
const teamsThemesMarks = teamsThemesConcatMarks(teamsWithThemes, pairsTeams);
console.log("Function 4:", teamsThemesMarks);
