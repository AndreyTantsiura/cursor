class Student {
  constructor(university, course, fullName) {
    this.university = university;
    this.course = course;
    this.fullName = fullName;
    this.marks = [5, 4, 4, 5];
  }

  getInfo() {
    if (!this.university) return null;
    return `Студент ${this.course}го курсу ${this.university}, ${this.fullName}`;
  }

  get getMarks() {
    if (!this.university) return null;
    return this.marks;
  }

  set setMarks(newMark) {
    if (!this.university) return null;
    return this.marks.push(newMark);
  }

  getAverageMark() {
    return this.marks.reduce((a, b) => a + b) / this.marks.length;
  }

  dismiss() {
    this.university = !this.university;
  }

  recover() {
    this.university = true;
  }
}

//1
const ostap = new Student(
  "Вищої Школи Психотерапії м.Одеса",
  "1",
  "Остап Родоманський Бендер"
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

//6
ostap.dismiss();
console.log("Оцінки студента до оцінювання:", ostap.getMarks);

//7
ostap.recover();
console.log("Оцінки студента до оцінювання:", ostap.getMarks);
