
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
  const pokemonById=await Pokemon.findByPk(id,  {include: Type }) //! revisar
  
  const pokemonsDBId={
    id:pokemonById.id,
    name:pokemonById.name,
    img:pokemonById.img,
    hp:pokemonById.hp,
    atrack:pokemonById.atrack,
    defense:pokemonById.defense,
    specialAttack:pokemonById.specialAttack,
    specialDefense:pokemonById.specialDefense,
    speed:pokemonById.speed,
    height:pokemonById.height,
    weight:pokemonById.weight,
    typePrimary:pokemonById.Types[0]?.name,
    typeSecondary:pokemonById.Types[1]?.name

    
  }
 return pokemonsDBId;
  
  

}

let getPokemonById=async function(id) {
  try {
    if (isNaN(id)===false)
   return await getPokemonApi(id);
    else {return await getPokemonByIdDB(id)}
  } catch (error) {
     throw new Error('Not found!') //* Se la creacion del error  si no lo consigue OK
  }
  
}

let getPokemonByName=async function(name) {
  try {
    const nameLower=name.toLowerCase()
    const pokemonDB=await Pokemon.findOne({where: { //! si se recibe el nombre en mayuscula o en miniscula debe poder buscar
      name:nameLower},
      include: Type})

    if(pokemonDB) {
      const PokemonsDBname={
        id:pokemonDB.id,
        name:pokemonDB.name,
        img:pokemonDB.img,
        hp:pokemonDB.hp,
        atrack:pokemonDB.atrack,
        defense:pokemonDB.defense,
        specialAttack:pokemonDB.specialAttack,
        specialDefense:pokemonDB.specialDefense,
        speed:pokemonDB.speed,
        height:pokemonDB.height,
        weight:pokemonDB.weight,
        typePrimary:pokemonDB.Types[0]?.name,
        typeSecondary:pokemonDB.Types[1]?.name }
      
      return  PokemonsDBname}

    const pokemonApi= await getPokemonApi(nameLower); 

    if(pokemonApi) {return pokemonApi}

    

  } catch (error) {
    
    throw new Error('Not found!')} //* Se la creacion del error  si no lo consigue OK
  

}

let createPokemon=async function(pokemon) {
  const {
    name, //* no debe de permitir agregar si el nombre existe en la DB OK
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
  
  if (!name) {throw new Error('need to send the name of the pokemon!')}
  
  const pokemonDB=await Pokemon.findOne({
    where: {name:name.toLowerCase()}
  })
    if(pokemonDB) { throw new Error('There is already a pokemon with that name, please choose another name!')}

  const Types = await Type.findAll({
    attributes: ['id'],
    where: { name:{[Op.in]: [typePrimary, typeSecondary]} }
  }); //! se debe de crear un error si uno de los tipos no existe en la base de datos
  
  let character = {
    name:name.toLowerCase(), //* convertir el nombre en minuscula OK
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
  const NewPokemon = await Pokemon.create(character);
  await NewPokemon.addTypes(Types);
  

  return NewPokemon;
 
}



module.exports = {
    getAllPokemons,
    getPokemonById,
    getPokemonByName,
    createPokemon
  };