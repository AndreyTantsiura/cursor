for (let i = 0; i < 24; i++) {
  let block = document.getElementById("block");
  let cloneBlock = block.cloneNode();
  let colorBlock = block.getAttribute("background-color")
  cloneBlock.setAttribute("background-color", generateColor())

  document.body.append(cloneBlock);
}

function generateColor() {
	return '#' + Math.floor(Math.random() * 16777215).toString(16)
 }