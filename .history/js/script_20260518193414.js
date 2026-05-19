const pokemonName = document.querySelector('.pokemon-name')

const fetchPokemon = async(pokemon) =>
{
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await APIResponse.json();
    return data;
}

const renderPokemon = (pokemon) =>
{
    const data = await fetchPokemon(pokemon);

    console.log

    pokemonName.innerHTML = data.name;
}

renderPokemon('23')