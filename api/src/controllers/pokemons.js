
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
/*   const PokemonsDB=AllPokemonsDB.map(elem=>{
return{
  name: elem.dataValues.name,
  id: elem.dataValues.id,
  img: elem.dataValues.img,
  attack: elem.dataValues.attack,
  typePrimary: elem.dataValues.types[0]?.name,
  typeSecondary: elem.dataValues.types[1]?.name,
  
}
  }) */

  const PokemonsDB=AllPokemonsDB.map(elem=>{
    return{
      name: elem.name,
      id: elem.id,
      img: elem.img,
      attack: elem.attack,
      typePrimary: elem.Types[0]?.name,
      typeSecondary: elem.Types[1]?.name,
      
    }
      })
  return PokemonsDB;
  //return AllPokemonsDB

}

let getAllPokemons=async function() {
  
    const getApiPokemons= await getPokemons40()
    const getDBPokemons=  await getPokemonsDB()
 

 return await [...getApiPokemons,...getDBPokemons]
 //return  [...getDBPokemons]

}



let getPokemonApi=async function(id) {
    let api = (await (axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`))).data;
    let PokemonApi ={ 
        id:api.id,
        name:api.name,
        img:api.sprites.other.home.front_default,
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
     throw new Error('Not found!') //! revisar la creacion del error  
  }
  
}

let getPokemonByName=async function(name) {
  try {
    const pokemonDB=await Pokemon.findOne({where: {
      name:name}})
    if(pokemonDB) {return  pokemonDB}

    const pokemonApi= await getPokemonApi(name); //! aunque no consiga el nombre en la api devuelve algo vacio ver como solucionarlo

    if(pokemonApi) {return pokemonApi}

    

  } catch (error) {
    
    throw new Error('Not found!')}
  

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
  const pokemonDB=await Pokemon.findOne({where: {
    name:name}})
    if(pokemonDB) { throw new Error('There is already a pokemon with that name, please choose another name!')}

  const Types = await Type.findAll({
    attributes: ['id'],
    where: { name:{[Op.in]: [typePrimary, typeSecondary]} }
  }); //! se debe de crear un error si uno de los tipos no existe en la base de datos

  const NewPokemon = await Pokemon.create(character);
  await NewPokemon.addTypes(Types);
  

  //return NewPokemon;
  return Types;
}



module.exports = {
    getAllPokemons,
    getPokemonById,
    getPokemonByName,
    createPokemon
  };