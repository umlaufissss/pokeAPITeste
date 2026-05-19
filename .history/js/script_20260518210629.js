const pokemonName = document.querySelector('.pokemon-name');
const pokemonNumber = document.querySelector('.pokemon-num');
const pokemonNumber = document.querySelector('.pokemon-num');

const fetchPokemon = async(pokemon) =>
{
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
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
}

renderPokemon('zorua')