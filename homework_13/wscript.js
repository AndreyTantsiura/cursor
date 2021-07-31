const getCharacters = document.getElementById("getCharacters");
getCharacters.addEventListener("click", getCharactersData);

let numberEpisod = 2;
const select = document.getElementById("selectEpisod");
const amountFilms = select.length;

select.addEventListener("change", (e) => {
  document.getElementById("characters").innerHTML = "";
  document.getElementById("planetsList").innerHTML = "";
  numberEpisod = +e.target.value;
  return numberEpisod;
});

function getCharactersData() {
  document.getElementById("characters").innerHTML = "";
  document.getElementById("planetsList").innerHTML = "";
  if (document.querySelector(".nextButton")) {
    document.querySelector(".nextButton").remove();
  }
  if (document.querySelector(".previousButton")) {
    document.querySelector(".previousButton").remove();
  }

  axios.get(`https://swapi.dev/api/films/${numberEpisod}/`).then((response) => {
    const arrLinkCharacters = response.data.characters;
    arrLinkCharacters.map((item) => {
      return axios.get(item + "?format=wookiee").then((response) => {
        const id = parseInt(response.config.url.replace(/\D+/g, ""));
        const img = document.createElement("img");
        img.setAttribute("src", `./img/${id}.png`);

        const result = {
          name: response.data.whrascwo,
          birth_year: response.data.rhahrcaoac_roworarc,
          gender: response.data.rrwowhwaworc,
        };

        const charactersList = document.getElementById("characters");

        charactersList.insertAdjacentHTML(
          "beforeend",
          `<div id="icon"><p>Whrascwo: ${result.name}<br><span>Rhahrcaoac roworarc: ${result.birth_year}</span><br><span>Rrwowhwaworc: ${result.gender}</span></p></div>`
        );
        charactersList.append(img);
      });
    });
  });
}

const getPlanetsList = document.getElementById("getPlanetsList");
getPlanetsList.addEventListener("click", getPlanets);

const planetsList = document.getElementById("planetsList");
let planets = null;
function getPlanets() {
  document.getElementById("characters").innerHTML = "";
  document.getElementById("planetsList").innerHTML = "";
  axios.get(`https://swapi.dev/api/films/${numberEpisod}`).then((response) => {
    const arrLinkPlanets = response.data.planets;
    arrLinkPlanets.map((item) => {
      return axios.get(item + "?format=wookiee").then((response) => {
        planets = response.data.whrascwo;
        planetsList.insertAdjacentHTML(
          "beforeend",
          `<ul><li>${planets}</li></ul>`
        );
      });
    });
  });
  if (planets === null) {
    previousPage();
    nextPage();
  }
}

function nextPage() {
  document.getElementById("characters").innerHTML = "";
  document.getElementById("planetsList").innerHTML = "";

  const info = document.querySelector(".info");

  const nextButton = document.createElement("button");
  nextButton.setAttribute("class", "nextButton");
  nextButton.innerHTML = "Next >>";

  info.before(nextButton);

  nextButton.addEventListener("click", getNextPagePlanets);
}

function getNextPagePlanets() {
  document.getElementById("characters").innerHTML = "";
  document.getElementById("planetsList").innerHTML = "";

  let nextEpisod = numberEpisod + 1;
  if (numberEpisod === amountFilms) {
    nextEpisod = 1;
  }
  console.log(nextEpisod);
  axios.get(`https://swapi.dev/api/films/${nextEpisod}`).then((response) => {
    const arrLinkPlanets = response.data.planets;
    arrLinkPlanets.map((item) => {
      return axios.get(item).then((response) => {
        planets = response.data.name;
        planetsList.insertAdjacentHTML(
          "beforeend",
          `<ul><li>${planets}</li></ul>`
        );
      });
    });
  });
}

function previousPage() {
  document.getElementById("characters").innerHTML = "";
  document.getElementById("planetsList").innerHTML = "";

  const info = document.querySelector(".info");

  const previousButton = document.createElement("button");
  previousButton.setAttribute("class", "previousButton");
  previousButton.innerHTML = "<< Previos";

  info.before(previousButton);

  previousButton.addEventListener("click", getPreviousPagePlanets);
}

function getPreviousPagePlanets() {
  document.getElementById("characters").innerHTML = "";
  document.getElementById("planetsList").innerHTML = "";

  let nextEpisod = numberEpisod - 1;
  if (numberEpisod === 1) {
    nextEpisod = amountFilms;
  }
  console.log(nextEpisod);
  axios.get(`https://swapi.dev/api/films/${nextEpisod}`).then((response) => {
    const arrLinkPlanets = response.data.planets;
    arrLinkPlanets.map((item) => {
      return axios.get(item).then((response) => {
        planets = response.data.name;
        planetsList.insertAdjacentHTML(
          "beforeend",
          `<ul><li>${planets}</li></ul>`
        );
      });
    });
  });
}

const getEnglish = document.getElementById("english");
getEnglish.addEventListener("click", translateToWookiee);

function translateToWookiee() {
  window.location.href = "index.html";
}
