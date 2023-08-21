
// async function getPokemonAsync() {
//     const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0');
//     const listOfPokemons = await response.json();
//     console.log(listOfPokemons);
// }
document.querySelector('#search').addEventListener('click', getPokemon);
function capitalizeFirstLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function lowerCaseName(string){
    return string.toLowerCase();
}

function getPokemon(e){
    const name = document.querySelector('#pokemonName').value;
    const lowerName = lowerCaseName(name);

    fetch(`https://pokeapi.co/api/v2/pokemon/${lowerName}`)
        .then((response)=>response.json())
        .then((data) => {
            document.querySelector('.pokemonBox').innerHTML =  `
                <div>
                    <img src="${data.sprites.other["official-artwork"].front_default}" alt="${data.species['lowerName']}">
                </div>
                <div class="pokemonInfo">
                    <h1>${capitalizeFirstLetter(data.species['name'])}</h1>
                    <p>Weight: ${data.weight}</p>
                </div>
            `
    }).catch((error)=>{
        console.log("Pokemon not found!", error.message);
    });

    e.preventDefault();
}
