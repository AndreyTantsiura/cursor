const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = [
  "Диференційне рівняння",
  "Теорія автоматів",
  "Алгоритми і структури даних",
];
const marks = [4, 5, 5, 3, 4, 5];

// #1 Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом. У вас повинен вийти вкладений масив з парами студентів: [["Олександр", "Олена"], [..], [...]];

function pairIntoTeams() {
  const studentsTeams = [];

  const firstTeam = [].concat(students[0], students[2]);
  const secondTeam = [].concat(students[1], students[3]);
  const thirdTeam = [].concat(students[0], students[2]);
  studentsTeams.push(firstTeam, secondTeam, thirdTeam);

  return studentsTeams;
}

console.log(pairIntoTeams());

// #2 Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати. Повинен вийти вкладений масив виду: [["Олександр і Олена", "Теорія автоматів"], [...], [...]]

function teamsConcatWithThemes() {
  const teamsConcatThemes = [];

  const firstTeamThemes = [].concat(pairIntoTeams()[0].join(" i "), themes[0]);
  const secondTeamThemes = [].concat(pairIntoTeams()[1].join(" i "), themes[1]);
  const thirdTeamThemes = [].concat(pairIntoTeams()[2].join(" i "), themes[2]);
  teamsConcatThemes.push(firstTeamThemes, secondTeamThemes, thirdTeamThemes);

  return teamsConcatThemes;
}

console.log(teamsConcatWithThemes());

// #3 Зіставте оцінки(marks) зі студентом(students): [["Саша", 4], [...], [...]]

function studentsConcatWithMarks() {
  const studentsMarks = [];
  for (let i = 0; i < students.length; i++) {
    studentsMarks.push(students[i] + ", " + marks[i]);
  }
  return studentsMarks;
}

console.log(studentsConcatWithMarks());

// #4 Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт(тут функція буде нечистою, але не повинна мутувати массив): [["Олександр і Олена", "Теорія автоматів", 5], [...], [...]]

function teamsThemesConcatMarks() {
  const teamsThemesMarks = [];

  const firstRandomMark = marks[Math.floor(Math.random() * marks.length)];
  const secondRandomMark = marks[Math.floor(Math.random() * marks.length)];
  const thirdRandomMark = marks[Math.floor(Math.random() * marks.length)];

  const firstTeamsThemesMarks = [].concat(
    teamsConcatWithThemes()[0],
    firstRandomMark
  );
  const secondTeamsThemesMarks = [].concat(
    teamsConcatWithThemes()[1],
    secondRandomMark
  );
  const thirdTeamsThemesMarks = [].concat(
    teamsConcatWithThemes()[2],
    thirdRandomMark
  );
  teamsThemesMarks.push(
    firstTeamsThemesMarks,
    secondTeamsThemesMarks,
    thirdTeamsThemesMarks
  );

  return teamsThemesMarks;
}

console.log(teamsThemesConcatMarks());
