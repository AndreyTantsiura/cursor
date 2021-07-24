function generateBlocks(blockWidth = "50", blockHeidht = "50", column = 5) {
  const row = document.createElement("div");
  row.setAttribute("id", "row");
  row.style.width = blockWidth * column + "px";
  document.body.append(row);

  for (let i = 0; i < 25; i++) {
    const block = document.createElement("div");
    block.classList.add("block");
    block.style.width = blockWidth + "px";
    block.style.height = blockHeidht + "px";
    block.style.backgroundColor = `getRandomColor()`
    row.append(block);
  }
}

generateBlocks();

const getRandomColor = () => {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return randomColor
}

function generateBlocksInterval() {
  setInterval(() => {
    const blocks = document.querySelectorAll(".block");
    blocks.forEach((item) => {
      item.style.backgroundColor = getRandomColor()
    });
  }, 1000);
}

generateBlocksInterval();
