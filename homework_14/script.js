function* createIdGenerator() {
  let i = 0;
  while (true) {
    i++;
    yield i;
  }
}

const idGenerator = createIdGenerator();

console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);

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

console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next().value);
console.log(fontGenerator.next("down").value);
console.log(fontGenerator.next("down").value);
console.log(fontGenerator.next("down").value);
console.log(fontGenerator.next().value);
