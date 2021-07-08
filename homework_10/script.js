const keys = document.querySelector(".keys");
const audio = document.querySelectorAll("audio");
const key = keys.querySelectorAll(".key");

keys.addEventListener("click", (e) => {
  removeClassPlaying();
  audio.forEach((item) => {
    if (item.getAttribute("id") === e.target.getAttribute("id")) {
      item.play();
      e.target.classList.add("playing");
    }
  });
});

function removeClassPlaying() {
  key.forEach((item) => {
    item.classList.remove("playing");
  });
}
