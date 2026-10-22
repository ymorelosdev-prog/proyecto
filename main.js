
const allPokemons = [
  "bulbasaur",
  "buterfree",
  "dragonite",
  "ferrow",
  "charizard",
  "squirtle",
  "gengar",
  "bellsprout",
  "snorlax",
  "ratata",
  "starmie",
  "rapidash",
  "pikachu",
  "aerodactil",
  "nidoking",
  "venamont",
  "lapras",
  "kangaskan",
  "jolteon",
  "hitmochan",
  "golduck",
  "flareon",
  "geodude",
  "mewtwo",
  "zubat"


];

const desktopPositions = [
  "25%",
  "35%",
  "45%",
  "55%",
  "65%"
];



const mobilePositions = ["4%", "22%", "40%", "58%", "76%"];
const mobileQuery = window.matchMedia("(max-width: 800px)");

const layer = document.getElementById("pokemonLayer");


function shuffle(array) {
  return array
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}


function renderPokemons() {
  layer.innerHTML = ""; // limpia escena

  const positions = mobileQuery.matches ? mobilePositions : desktopPositions;

  const selected = shuffle(allPokemons).slice(0, 5);

  selected.forEach((name, index) => {
    spawnPokemon(name, positions[index], index);
  });
}


function spawnPokemon(name, targetX, order) {
  const el = document.createElement("img");
  el.className = "pokemon";
  el.src = `assets/pokemons/${name}-walk.webp`;

  el.style.left = "-120px";
  el.style.transition = "left 4s linear";
  el.style.zIndex = 10 + order;

  layer.appendChild(el);

  const delay = 600 + order * 700;

  setTimeout(() => {
    el.style.left = targetX;
  }, delay);

  setTimeout(() => {
    el.style.transition = "none";
    el.src = `assets/pokemons/${name}-idle.webp`;
  }, delay + 4000);
}

renderPokemons();

document.addEventListener("visibilitychange", () => {
  if (!document.hidden) {
    renderPokemons();
  }
});
