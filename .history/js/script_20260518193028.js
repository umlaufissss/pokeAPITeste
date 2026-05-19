const pokemonName = document.querySelector('.pokemon-name')

const fetchPokemon = (pokemon) =>
{
    const APIResponse = await fetch('https://pokeapi.co/api/v2/pokemon/${pokemon}');
    const data = await APIResponse.json();
    return data;
}

const renderPokemon = (pokemon) =>
{
    const data = await fetchPokemon(pokemon);


}

renderPokemon('25')