const poke_container = document.getElementById("poke-container");
const pokemon_count = 150;
const colors = {
    fire: "#fddfdf",
    grass: "#defde0",
    electric: "#fcf7de",
    water: "#def3fd",
    ground: "#f4e7da",
    rock: "#d5d5d4",
    fairy: "#fceaff",
    poison: "#98d7a5",
    bug: "#f8d5a3",
    dragon: "#97b3e6",
    psychic: "#eaedal",
    flying: "#f5f5f5",
    fighting: "e6e0d4",
    normal: "#f5f5f5",
};

const main_types = Object.keys(colors)

async function fetchPokemons() {
    for (let i = 1; i <= pokemon_count; i++) {
        await getPokemon(i);
    }
}

async function getPokemon(id) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    createPokemonCard(data);
}

async function createPokemonCard(pokemon) {
    const pokemonEl = document.createElement("div");
    pokemonEl.classList.add("pokemon");

    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
    const id = pokemon.id.toString().padStart(3, '0')
    const poke_types = pokemon.types.map(type => type.type.name)
    const type = main_types.find(type => poke_types.indexOf(type) > -1)
    const color = colors[type]

    pokemonEl.style.backgroundColor = color

    const pokemonInnerHtml = `
    <div class="img-container">
    // Not working anymore :<
        <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}" alt="">
    </div>
    <div class="info">
        <span class="number">#${id}</span>
        <h3 class="name">${name}</h3>
        <small class="type">Type: <span>${type}</span></small>
    </div>
    `

    pokemonEl.innerHTML = pokemonInnerHtml

    poke_container.appendChild(pokemonEl)
}

fetchPokemons();
