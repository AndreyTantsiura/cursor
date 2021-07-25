const getCharacters = document.getElementById("getCharacters");
getCharacters.addEventListener("click", getCharactersData);

let numberEpisod = 2;
const select = document.getElementById("selectEpisod");
select.addEventListener("change", (e) => {
  document.getElementById("characters").innerHTML = "";
  document.getElementById("planetsList").innerHTML = "";
  numberEpisod = e.target.value;
  return numberEpisod;
});

function getCharactersData() {
  document.getElementById("characters").innerHTML = "";
  document.getElementById("planetsList").innerHTML = "";

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
}

const getEnglish = document.getElementById("english");
getEnglish.addEventListener("click", translateToWookiee);

function translateToWookiee() {
  window.location.href = "index.html";
}
