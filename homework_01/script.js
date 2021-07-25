// Використовуючи вбудований об'єкт Math – виведіть максимальне число
// Використовуючи вбудований об'єкт Math – виведіть мінімальне число
// Складіть вартість всіх товарів, помістіть її в змінну та виведіть цю суму
// Відкиньте копійки у всіх товарів, потім – складіть цілу частину вартості кожного товару між собою. Округлення використовувати в МЕНЬШУ сторону.
// Виведіть суму товарів округлену до сотень. (Наприклад якщо вийшло 260, то виведіть 300)
// Виведіть булеве значення: чи є сума всіх товарів (округлена в меншу сторону) парним чи непарним числом?
// Виведіть суму решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн.
// Виведіть середнє значення цін, округлене до другого знаку після коми
// (Більш складне) Створіть змінну, в якої збережіть випадкову знижку (використовуйте функцію Math.random).
// Зробіть клієнту випадкову знижку та виведіть суму до оплати округлену до 2 знаків після коми.
// Виведіть чистий прибуток, якщо клієнт заплатив зі знижкою та собівартість товарів рівно в два рази нижче їх ціни?
// (Приклад: ціна була 260.66, знижка склала 10%, клієнт заплатив на 26 меньше, собівартість = 260 / 2 -> 130. Чистий прибуток = 130 - 26 -> 104) (Приклад 2: ціна була 100, знижка склала 90%, клієнт заплатив на 90 меньше, собівартість = 100 / 2 -> 50. Чистий прибуток = 50 - 90 -> -40)\

const apllePrice = 15.678;
const pearsPrice = 123.965;
const peachesPrice = 90.2345;

export const maxPrice = Math.max(apllePrice, pearsPrice, peachesPrice);
console.log("maxPrice", maxPrice);

const minPrice = Math.min(apllePrice, pearsPrice, peachesPrice);
console.log("minPrice", minPrice);

const productPrice = apllePrice + pearsPrice + peachesPrice;
console.log("productPrice", productPrice);

const sumPriceWithoutCoins =
  Math.floor(apllePrice) + Math.floor(pearsPrice) + Math.floor(peachesPrice);
console.log("sumPriceWithoutCoins", sumPriceWithoutCoins);

const sumPriceRoundToHundreds = Math.round(productPrice / 100) * 100;
console.log("sumPriceRoundToHundreds", sumPriceRoundToHundreds);

const isEven = Math.floor(productPrice) % 2 === 0;
console.log("isEven", isEven);

const cash = 500;
const remainder = cash - productPrice;
console.log("remainder", remainder);

const averagePrice = +(productPrice / 3).toFixed(2);
console.log("averagePrice", averagePrice);

const discount = +(Math.random() * 100).toFixed();
console.log("discount", discount);

const sumWithDiscount = +(
  productPrice -
  (discount * productPrice) / 100
).toFixed(2);
console.log("sumWithDiscount", sumWithDiscount);

const profit = +(productPrice / 2 - (discount * productPrice) / 100).toFixed(2);
console.log("profit", profit);

// Advanced

document.body.innerHTML = `1. Максимальне число = ${maxPrice}; <br>
2. Мінімальне число = ${minPrice}; <br>
3. Вартість всіх товарів = ${productPrice}; <br>
4. Сума цілих частин вартості товарів = ${sumPriceWithoutCoins}; <br>
5. Сума товарів округлена до сотень = ${sumPriceRoundToHundreds}; <br>
6. Сума всіх товарів (округлена в меншу сторону) є парним числом: ${isEven}; <br>
7. Сума решти при сплаті ${cash} складає = ${remainder}; <br>
8. Середнє значення цін = ${averagePrice}; <br>
9. Випадкова знижка = ${discount}%; <br>
10. Сума з випадковою знижкою = ${sumWithDiscount}; <br>
11. Чистий прибуток = ${profit}.`;
