
const axios = require("axios");
const e = require("cors");
const { Pokemon, Type } = require("../db");

//? primera forma
/* let getPokemons = async function() {
    let api1 = (await (axios.get(`https://pokeapi.co/api/v2/pokemon`))).data;
    let apiData1 =await Promise.all( api1.results.map(async (d) => {
      return  {
        name: d.name,
        id:(await (axios.get(d.url))).data.id,
        img:(await (axios.get(d.url))).data.sprites.other.home.front_default,
        type:(await (axios.get(d.url))).data.types.map(e=>{return e.type.name})
        
      };
    }));
    let api2 = (await (axios.get(api1.next))).data;

    let apiData2 =await Promise.all( api2.results.map(async (d) => {
      return  {
        name: d.name,
        id:(await (axios.get(d.url))).data.id,
        img:(await (axios.get(d.url))).data.sprites.other.home.front_default,
        type:(await (axios.get(d.url))).data.types.map(e=>{return e.type.name})
        
      };
    }));

    return  [...apiData1,...apiData2];
  } */

//? Segunda forma

let getPokemons40 = async function() {

const apiData=[];
for (let i = 1; i < 41; i++) {
  let api = (await (axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`))).data;
  let pokemonItem= {
    name:api.name,
    id: api.id,
    img:api.sprites.other.home.front_default,
    attack:api.stats[1].base_stat,
    type:api.types.map(e=>{return e.type.name})
   
  }
  
  apiData.push(pokemonItem)
}

return [...apiData]

}


let getPokemonsDB = async function() {
  const AllPokemonsDB=await Pokemon.findAll();
  const PokemonsDB=AllPokemonsDB.map(elem=>{
return{
  name: elem.dataValues.name,
  id: elem.dataValues.id,
  img: elem.dataValues.img,
  attack: elem.dataValues.attack,
  //type:elem.dataValues.type

}
  })

  return PokemonsDB;

}

let getAllPokemons=async function() {
  
    const getApiPokemons= await getPokemons40()
    const getDBPokemons=  await getPokemonsDB()
 

 //return getApiPokemons.concat(getDBPokemons)
 return await [...getApiPokemons,...getDBPokemons]
 //return  [...getApiPokemons]

}



let getPokemonApi=async function(id) {
    let api = (await (axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`))).data;
    let PokemonApi ={ 
        id:api.id,
        name:api.name,
        img:api.sprites.other.home.front_default,
        height:api.height,
        weight:api.weight,
        types:api.types.map((e)=>{return e.type.name}),
        hp:api.stats[0].base_stat,
        attack:api.stats[1].base_stat,
        defense:api.stats[2].base_stat,
        special_attack:api.stats[3].base_stat,
        special_defense:api.stats[4].base_stat,
        speed:api.stats[5].base_stat,
    }
   return PokemonApi;
}
let getPokemonByIdDB=async function(id) {
  const PokemonById=await Pokemon.findByPk(id)
  return await PokemonById;
}

let getPokemonById=async function(id) {
  try {
    if (isNaN(id)===false)
   return await getPokemonApi(id);
    else {return await getPokemonByIdDB(id)}
  } catch (error) {
     throw Error('"Not found!"') //! revisar la creacion del error  
  }
  
}

let getPokemonByName=async function(name) {
  try {
    return await getPokemonApi(name);

  } catch (error) {
    const pokemon=await Pokemon.findOne(name)
  return pokemon;}
  

}


module.exports = {
    getAllPokemons,
    getPokemonById,
    getPokemonByName
  };