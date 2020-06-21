const API = 'https://pokeapi.co/api/v2/pokemon/';
const DEFAULT_QUERY = 'redux';

function getPokeApi(thisObj,pokemon){ 
    fetch(API+pokemon)
    .then(response => response.json())
    .then(data => thisObj.setState({ pokemonInfo: data, isLoading: false }));
}

function getPokeApiListing(thisObj){ 
    fetch(API)
    .then(response => response.json())
    .then(data => thisObj.setState({ hits: data.results, isLoading: false }));
}

export {getPokeApi,getPokeApiListing}