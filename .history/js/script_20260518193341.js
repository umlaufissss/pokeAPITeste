const pokemonName = document.querySelector('.pokemon-name')

const fetchPokemon = async(pokemon) =>
{
    const APIResponse = async fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}´);
    const data = await APIResponse.json();
    return data;
}

const renderPokemon = (pokemon) =>
{
    const data = async fetchPokemon(pokemon);

    pokemonName.innerHTML = data.name;
}

renderPokemon('23')