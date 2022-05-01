const axios = require("axios");

let getPokemonTypes=async function() {
    let api = (await (axios.get(`https://pokeapi.co/api/v2/type`))).data.results
    let apiData =api.map((elem,index)=>{
        return  {
        id: ++index,
        name:elem.name}
    })

    return  [...apiData];
}


module.exports = {
    getPokemonTypes
    }