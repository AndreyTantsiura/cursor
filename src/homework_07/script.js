export const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

// 1. Створіть функцію getMyTaxes.call(country, salary) -> number; – яка рахує скільки податків ви заплатите як IT-спеціаліст в якійсь з країн. Функція повинна викликатись через call та працювати з даними через this

export function getMyTaxes(mySalary, country) {
  const myTaxes = (mySalary * this.tax).toFixed(2);
  return `In ${country} I will pay: ${myTaxes}`;
}

console.log("#1:\n", getMyTaxes.call(ukraine, 1500, "ukraine"));

// 2. Створіть функцію getMiddleTaxes.call(country) -> number; – яка рахує скільки у середньому податків платятт IT-спеціалісти у кожній країні. (tax * middleSalary). Функція повинна викликатись через call та працювати з даними через this

function getMiddleTaxes(country) {
  const middleTax = (this.tax * this.middleSalary).toFixed(2);
  return `In ${country} middle tax = ${middleTax}`;
}
console.log("#2:\n", getMiddleTaxes.call(ukraine, "ukraine"));
console.log(getMiddleTaxes.call(latvia, "latvia"));
console.log(getMiddleTaxes.call(litva, "litva"));

// 3. Створіть функцію getTotalTaxes.call(country) -> number; – яка рахує, скільки всього податків платять IT-спеціалісти у кожній країні. (tax * middleSalary * vacancies). Функція повинна викликатись через call та працювати з даними через this

function getTotalTaxes(country) {
  const middleTax = (this.tax * this.middleSalary * this.vacancies).toFixed(2);
  return `In ${country} total tax = ${middleTax}`;
}
console.log("#3:\n", getTotalTaxes.call(ukraine, "ukraine"));
console.log(getTotalTaxes.call(latvia, "latvia"));
console.log(getTotalTaxes.call(litva, "litva"));

// 4. Створіть функцію getMySalary(country) – яка буде писати в консоль об'єкт виду: { salary: number, taxes: number, profit: number } кожні 10 секунд. Значення salary – генеруйте випадковим чином у діапазоні 1500-2000. taxes – розраховується в залежності від вибраної країни та значення salary.
// profit = salary - taxes;

function getMySalary(country) {
  console.log(`#4: ${country}:`);
  setInterval(() => {
    const salary = Math.floor(Math.random() * 501) + 1500;
    const taxes = +(salary * this.tax).toFixed(2);
    const profit = +(salary - taxes).toFixed(2);
    const dataOfCountry = {
      salary: salary,
      taxes: taxes,
      profit: profit,
    };
    console.log(dataOfCountry);
  }, 10000);
}
getMySalary.call(ukraine, "ukraine");
