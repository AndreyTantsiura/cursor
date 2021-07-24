const keys = document.querySelector(".keys");
const key = keys.querySelectorAll(".key");
const audio = document.querySelectorAll("audio");

document.addEventListener("keydown", (e) => {
  removeClassPlaying();
  audio.forEach((item) => {
    if (item.getAttribute("id") === e.code) {
      item.play();
      keys.querySelector(`#${e.code}`).classList.add("playing");
    }
  });
});

keys.addEventListener("click", (e) => {
  removeClassPlaying();
  audio.forEach((item) => {
    if (item.getAttribute("id") === e.target.getAttribute("id")) {
      console.log(e.target)
      item.play();
      e.target.classList.add("playing");
    }
  });
});

function removeClassPlaying() {
  key.forEach((item) => {
    item.classList.remove("playing");
  });
  audio.forEach((item) => {
    item.pause();
    item.currentTime = 0;
  });
}
