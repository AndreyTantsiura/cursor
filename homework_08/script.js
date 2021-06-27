class Student {
  constructor(university, course, fullName) {
    this.university = university;
    this.course = course;
    this.fullName = fullName;
    this.marks = [5, 4, 4, 5];
    this.dismissed = false;
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
    return this.marks.push(newMark);
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

//Advanced

//1
class BudgetStudent extends Student {
  constructor(university, course, fullName) {
    super(university, course, fullName);
  }
  static getScholarship(cash) {
    if (!this.dismissed && this.getAverageMark() >= 4)
      return `Ви отримали ${cash} грн. стипендії`;
  }
}

const budgetStudent = new BudgetStudent(
  "Вищої Школи Психотерапії м.Одеса",
  "2",
  "Andrii Tantsiura"
);

console.log(BudgetStudent.getScholarship(1400));
