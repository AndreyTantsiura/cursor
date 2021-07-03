function generateBlocks(width = "50", height = "50", column = 5) {
  const row = document.createElement("div");
  row.setAttribute("id", "row");
  row.style.width = width * column + "px";
  document.body.append(row);

  for (let i = 0; i < 25; i++) {
    const block = document.createElement("div");
    block.setAttribute("id", "block");
    block.style.width = width + "px";
    block.style.height = height + "px";
    block.style.backgroundColor =
      "#" + Math.floor(Math.random() * 16777215).toString(16);
    row.append(block);
  }
}

generateBlocks();

function generateBlocksInterval() {
  setInterval(() => {
    const block = document.querySelectorAll("#block");
    block.forEach((item) => {
      item.style.backgroundColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);
    })
  }, 1000);
}

generateBlocksInterval();
