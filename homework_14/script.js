function* createIdGenerator() {
  let i = 0;
  while (true) {
    i++;
    yield i;
  }
}

const idGenerator = createIdGenerator();

console.log("task 1:")
console.log("idGenerator.next().value ->", idGenerator.next().value);
console.log("idGenerator.next().value ->", idGenerator.next().value);
console.log("idGenerator.next().value ->", idGenerator.next().value);

////////advanced

function* newFontGenerator(i) {
  let arg = yield i;

  while (true) {
    if (arg === "up") {
      arg = yield (i += 2);
    } else if (arg === "down") {
      arg = yield (i -= 2);
    } else {
      arg = yield i;
    }
  }
}

const fontGenerator = newFontGenerator(14);

console.log("advanced:")
console.log("idGenerator.next('up').value ->", fontGenerator.next("up").value);
console.log("idGenerator.next('up').value ->", fontGenerator.next("up").value);
console.log("idGenerator.next('up').value ->", fontGenerator.next("up").value);
console.log("idGenerator.next().value ->", fontGenerator.next().value);
console.log("idGenerator.next('down').value ->", fontGenerator.next("down").value);
console.log("idGenerator.next('down').value ->", fontGenerator.next("down").value);
console.log("idGenerator.next('down').value ->", fontGenerator.next("down").value);
console.log("idGenerator.next().value ->", fontGenerator.next().value);
