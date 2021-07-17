const getCharacters = document.getElementById("getCharacters");

getCharacters.addEventListener("click", getCharactersData);

function getCharactersData() {
  axios.get("https://swapi.dev/api/films/2/").then((respons) => {
    arrLink = respons.data.characters;
    arrLink.map((item) => {
      return axios.get(item).then((response) => {
        const result = {
          name: response.data.name,
          "birth year": response.data.birth_year,
          gender: response.data.gender,
        };
        const charactersList = document.getElementById("characters")
        charactersList.insertAdjacentHTML("beforeend", `<ul><li>${result}</li></ul>`);
      });
    });
  });
}

const getPlanetsList = document.getElementById("getPlanetsList");

getPlanetsList.addEventListener("click", getPlanets);

let planets = null;
function getPlanets() {
  axios.get("https://swapi.dev/api/planets/").then((response) => {
    planets = response.data.results;
    sortPlanets();
  });
}

const planetsList = document.getElementById("planetsList");
sortPlanets = () => {
  planets.map((p, i) => planetsList.insertAdjacentHTML("beforeend", `<ul><li>${p.name}</li></ul>`));
};
