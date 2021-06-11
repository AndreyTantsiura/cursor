const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = [
  "Диференційне рівняння",
  "Теорія автоматів",
  "Алгоритми і структури даних",
];
const marks = [4, 5, 5, 3, 4, 5];

function pairIntoTeams(students) {
  let studentsTeam = [];
  for (let i = 0; i < students.length; i++) {
    studentsTeam.push(students[0])
  }
  console.log(studentsTeam);
}

pairIntoTeams(students);
