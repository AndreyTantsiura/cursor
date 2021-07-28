async function getRandomChinese(length) {
  let rowLength = "";

  for (let i = 0; i < length; i++) {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        const sign = Date.now().toString().slice(-5);
        const row = String.fromCharCode(sign);
        resolve(row);
      }, 50 * i);
    });
    rowLength += await promise;
  }

  document.body.innerHTML = rowLength;
}

// const countSymbol = +prompt("Enter count symbols:", 4);
getRandomChinese(4);
