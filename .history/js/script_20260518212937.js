const pokemonName = document.querySelector('.pokemon-name');
const pokemonNumber = document.querySelector('.pokemon-num');
const pokemonImg = document.querySelector('.pokemon-img');

const form = document.querySelector('.form');
const input = document.querySelector('.input-search');

const fetchPokemon = async(pokemon) =>
{
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if (APIResponse.status == 200)
    const data = await APIResponse.json();
    return data;
}

const renderPokemon = async(pokemon) =>
{
    const data = await fetchPokemon(pokemon);

    console.log(data);
    console.log(pokemonName);
    console.log(pokemonNumber);

    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = data.id;
    pokemonImg.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
}


form.addEventListener('submit', (event) =>
{
    event.preventDefault();
   
    renderPokemon(input.value);
}
);