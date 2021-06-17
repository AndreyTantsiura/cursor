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
  const firstTeam = [students[0], students[2]];
  const secondTeam = [students[1], students[3]];
  const thirdTeam = [students[4], students[5]];

  studentsTeams.push(firstTeam, secondTeam, thirdTeam);

  return studentsTeams;
}

console.log("Function 1:", pairIntoTeams());

// #2 Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати. Повинен вийти вкладений масив виду: [["Олександр і Олена", "Теорія автоматів"], [...], [...]]

function teamsConcatWithThemes() {
  const teamsConcatThemes = [];
  const pairsTeams = pairIntoTeams();

  for (let i = 0; i < pairsTeams.length; i++) {
    teamsConcatThemes.push([pairsTeams[i].join(" i "), themes[i]]);
  }

  return teamsConcatThemes;
}

console.log("Function 2:", teamsConcatWithThemes());

// #3 Зіставте оцінки(marks) зі студентом(students): [["Саша", 4], [...], [...]]

function studentsConcatWithMarks() {
  const studentsMarks = [];

  for (let i = 0; i < students.length; i++) {
    studentsMarks.push([students[i], marks[i]]);
  }

  return studentsMarks;
}

console.log("Function 3:", studentsConcatWithMarks());

// #4 Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт(тут функція буде нечистою, але не повинна мутувати массив): [["Олександр і Олена", "Теорія автоматів", 5], [...], [...]]

function teamsThemesConcatMarks() {
  const teamsThemesMarks = [];
  const teamstWithThemes = teamsConcatWithThemes();
  const pairsTeams = pairIntoTeams();

  for (let i = 0; i < teamstWithThemes.length; i++) {
    teamsThemesMarks.push([
      pairsTeams[i].join(" i "),
      themes[i],
      Math.floor(Math.random() * (5 - 1 + 1)) + 1,
    ]);
  }

  return teamsThemesMarks;
}

console.log("Function 4:", teamsThemesConcatMarks());
