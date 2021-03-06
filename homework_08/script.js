class Student {
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

  get getMarks() {
    if (this.dismissed) return null;
    return this.marks;
  }

  set setMarks(newMark) {
    if (this.dismissed) return null;
    return (this.marks = [...this.marks, newMark]);
  }

  getAverageMark() {
    return this.marks.reduce((a, b) => a + b) / this.marks.length;
  }

  dismiss() {
    this.dismissed = true;
  }

  recover() {
    this.dismissed = false;
  }
}

//1
const ostap = new Student(
  "Вищої Школи Психотерапії м.Одеса",
  "1",
  "Остап Родоманський Бендер",
  [5, 4, 4, 5],
  false
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

//Advanced

class BudgetStudent extends Student {
  constructor(university, course, fullName, marks, dismissed) {
    super(university, course, fullName, marks, dismissed);
    this.marks = marks;
    this.dismissed = dismissed;
    setInterval(() => this.getScholarship(), 30000);
  }

  getScholarship(cash) {
    if (!this.dismissed && this.getAverageMark() >= 4)
      return `Ви отримали ${cash} грн. стипендії`;
    else {
      return "Ви не отримуєте стипендію!";
    }
  }
}

const budgetStudent = new BudgetStudent(
  "Вищої Школи Психотерапії м.Одеса",
  "2",
  "Andrii Tantsiura",
  [5, 4, 4, 5],
  false
);

console.log(budgetStudent.getScholarship(1400));
