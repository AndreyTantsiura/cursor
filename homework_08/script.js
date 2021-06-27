class Student {
  constructor(university, course, fullName, marks) {
    this.university = university;
    this.course = course;
    this.fullName = fullName;
    this.marks = marks;
  }

  getInfo() {
    return `Студент ${this.course}го курсу ${this.university}, ${this.fullName}`;
  }

  get getMarks() {
    return this.marks;
  }

  set setMarks(mark) {
    return this.marks.push(mark);
  }

  getAverageMark() {
    return this.marks.reduce((a, b) => a + b) / this.marks.length;
  }
}

//1
const ostap = new Student(
  "Вищої Школи Психотерапії м.Одеса",
  "1",
  "Остап Родоманський Бендер",
  [5, 4, 4, 5]
);

//2
console.log("Дані студента:", ostap.getInfo());

//3
console.log("Оцінки студента до оцінювання:", ostap.getMarks);

//4
ostap.setMarks = 5;
console.log("Оцінки студента після оцінювання:", ostap.getMarks);

//5
console.log("Cередній бал:", ostap.getAverageMark());
