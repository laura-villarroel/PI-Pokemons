
const axios = require("axios");
//const cors = require("cors");
const { Pokemon, Type } = require("../db");
const { Op } = require("sequelize");


let getPokemons40 = async function() {

const apiData=[];
for (let i = 1; i < 41; i++) {
  let api = (await (axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`))).data;
  let pokemonItem= {
    name:api.name,
    id: api.id,
    img:api.sprites.other.home.front_default,
    attack:api.stats[1].base_stat,
    //type:api.types.map(e=>{return e.type.name})
    typePrimary: api.types[0].type.name,
    typeSecondary: api.types[1]?.type.name,
   
  }
  
  apiData.push(pokemonItem)
}

return [...apiData]

}


let getPokemonsDB = async function() { 
  const AllPokemonsDB=await Pokemon.findAll({ include: Type }); //!  revisar se rompe por el type
  const PokemonsDB=AllPokemonsDB.map(elem=>{
return{
  name: elem.dataValues.name,
  id: elem.dataValues.id,
  img: elem.dataValues.img,
  attack: elem.dataValues.attack,
  typePrimary: elem.dataValues.types[0]?.name,
  typeSecondary: elem.dataValues.types[1]?.name,
  
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
        //types:api.types.map((e)=>{return e.type.name}),
        typePrimary: api.types[0].type.name,
        typeSecondary: api.types[1]?.type.name,
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

let createPokemon=async function(pokemon) {
  const {
    name, //! no debe de permitir agregar si el nombre existe en la DB
    img,
    height,
    weight,
    typePrimary,
    typeSecondary,
    hp,
    attack,
    defense,
    specialAttack,
    specialDefense,
    speed,
  } = pokemon; // req.body
  
  let character = {
    name,
    img,
    hp,
    attack,
    defense,
    specialAttack,
    specialDefense,
    speed,
    height,
    weight
  };

  //let types = [typePrimary, typeSecondary ? typeSecondary : null];
  
  const Types = await Type.findAll({
    attributes: ['id'],
    where: { name:{[Op.in]: [typePrimary, typeSecondary]} }
  }); //! se debe de crear un error si uno de los tipos no existe en la base de datos

  const NewPokemon = await Pokemon.create(character);
  await NewPokemon.addTypes(Types);
  //await NewPokemon.addTypes([Types[0].id, Types[1].id]);

  //return NewPokemon;
  return Types;
}

// const pokemon = await createPokemon(req.body)
//pokemon.addTypes(types)

module.exports = {
    getAllPokemons,
    getPokemonById,
    getPokemonByName,
    createPokemon
  };