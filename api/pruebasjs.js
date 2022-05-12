const axios = require("axios");

getPokemons40=async function()  {

return  axios.get(`https://pokeapi.co/api/v2/pokemon/1`)
.then(api=>api.data)
.then(api=>{
    return { 
        id:api.id,
        name:api.name,
        img:api.sprites.other.dream_world.front_default,
        height:api.height,
        weight:api.weight,
        typePrimary: api.types[0].type.name,
        typeSecondary: api.types[1]?.type.name,
        hp:api.stats[0].base_stat,
        attack:api.stats[1].base_stat,
        defense:api.stats[2].base_stat,
        special_attack:api.stats[3].base_stat,
        special_defense:api.stats[4].base_stat,
        speed:api.stats[5].base_stat,
    };
})
 .then(respuesta=> console.log(respuesta)) 
.catch(e=>console.log(e))
}

getPokemons40()