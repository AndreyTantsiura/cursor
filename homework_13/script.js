const getCharacters = document.getElementById("getCharacters");

getCharacters.addEventListener("click", getCharactersData);

function getCharactersData() {
  document.getElementById("planetsList").innerHTML = "";
  axios.get("https://swapi.dev/api/films/2/").then((respons) => {
    arrLink = respons.data.characters;
    arrLink.map((item) => {
      return axios.get(item).then((response) => {
        const id = parseInt(response.config.url.replace(/\D+/g, ""));

        const img = document.createElement("img");
        img.setAttribute("src", `./img/${id}.png`);

        const result = {
          name: response.data.name,
          birth_year: response.data.birth_year,
          gender: response.data.gender,
        };

        const charactersList = document.getElementById("characters");

        charactersList.insertAdjacentHTML(
          "beforeend",
          `<div id="icon"><p>${result.name} (${result.birth_year}, ${result.gender})</p></div>`
        );
        charactersList.append(img);
      });
    });
  });
}

const getPlanetsList = document.getElementById("getPlanetsList");

getPlanetsList.addEventListener("click", getPlanets);

let planets = null;
function getPlanets() {
  document.getElementById("characters").innerHTML = "";
  axios.get("https://swapi.dev/api/planets/").then((response) => {
    planets = response.data.results;
    sortPlanets();
  });
}

const planetsList = document.getElementById("planetsList");
sortPlanets = () => {
  planets.map((p, i) =>
    planetsList.insertAdjacentHTML("beforeend", `<ul><li>${p.name}</li></ul>`)
  );
};
