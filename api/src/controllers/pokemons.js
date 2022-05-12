const axios = require("axios");
const { Pokemon, Type } = require("../db");
const { Op } = require("sequelize");

//*1) FUNCIONES DE APOYO PARA CREAR LAS FUNCIONES DE LAS RUTAS.

 let Model={
  getPokemons40: async function() {
    // 1.1) función que obtiene los 40 primeros pokemones de la Api, y retorna un arreglo de pokemones.
    const apiData=[];
    for (let i = 1; i < 41; i++) {
      let api = (await (axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`))).data;
      let pokemonItem= {
        name:api.name,
        id: api.id,
        img:api.sprites.other.dream_world.front_default,
        attack:api.stats[1].base_stat,
        typePrimary: api.types[0].type.name,
        typeSecondary: api.types[1]?.type.name,
        moves:api.moves[0].move.name 
        }
      
      apiData.push(pokemonItem);
    }
       return [...apiData];
      },
      
      //*promesas
    /*   const apiData=[];
    for (let i = 1; i < 41; i++) {
      apiData.push( axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`))
    }
      Promise.all(apiData)
    
      .then(pokemon=>{
     let pokemonArray=pokemon.map(api=> {
       return{
         name:api.data.name,
        id: api.data.id,
        img:api.data.sprites.other.dream_world.front_default,
        attack:api.data.stats[1].base_stat,
        typePrimary: api.data.types[0].type.name,
        typeSecondary: api.data.types[1]?.type.name, 
        }
        
      })
      return  [...pokemonArray];
        })    
   
},  */

  getPokemonsDB: async function() {
    // 1.2) función que busca todos los pokemones en la DB e incluye el tipo de pokemon y retorna un arreglo de pokemones.
    const AllPokemonsDB=await Pokemon.findAll({ include: Type });
    const PokemonsDB=AllPokemonsDB.map(elem=>{
      return{
      name: elem.name,
      id: elem.id,
      img: elem.img,
      attack: elem.attack,
      typePrimary: elem.Types[0]?.name,
      typeSecondary: elem.Types[1]?.name, 
    }
  });
return PokemonsDB;
},

  getPokemonApi: async function(param) {
    // 1.3) función que busca en la Api un pokemon por id o por nombre, y retorna sus propiedades. 
         let api = (await (axios.get(`https://pokeapi.co/api/v2/pokemon/${param}`))).data;
        let PokemonApi ={ 
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
       return PokemonApi; 


},
  getPokemonByIdDB: async function(id) {
    // 1.4) función que busca en el DB un pokemon por id , y retorna sus propiedades incluyendo el tipo. 
    const pokemonById=await Pokemon.findByPk(id,  {include: Type }); 

    const pokemonsDBId={
      id:pokemonById.id,
      name:pokemonById.name,
      img:pokemonById.img,
      hp:pokemonById.hp,
      attack:pokemonById.attack,
      defense:pokemonById.defense,
      specialAttack:pokemonById.specialAttack,
      specialDefense:pokemonById.specialDefense,
      speed:pokemonById.speed,
      height:pokemonById.height,
      weight:pokemonById.weight,
      typePrimary:pokemonById.Types[0]?.name,
      typeSecondary:pokemonById.Types[1]?.name   
    };

   return pokemonsDBId;
  },
}

//* 2) FUNCIONES USADAS EN LAS RUTAS DE POKEMON

module.exports = {
    getAllPokemons: async function() {
        // 2.1) función que muestra los primeros 40 pokemon de la api juntos con todos los pokemones creados en el DB
        const getApiPokemons= await Model.getPokemons40();
        const getDBPokemons=  await Model.getPokemonsDB();
     
    
     return await [...getApiPokemons,...getDBPokemons]; 
     //return 

    },
    getPokemonById: async function(id) {
        // 2.2) función que busca en la Api si el id es un numero, sino busca el ID en el DB, y retorna sus propiedades incluyendo el tipo.
        //  sino consigue el pokemon genera un error.
        try {

            if (isNaN(id)===false) return await Model.getPokemonApi(id);
            else {return await Model.getPokemonByIdDB(id)};

          } catch (error) {
            throw new Error('Not found!'); 
            }

    },
    getPokemonByName: async function(name) {
        // 2.3) función que  busca en el DB y en el Api el nombre del pokemon, y retorna sus propiedades incluyendo el tipo.
        // sino lo consigue genera un error.
        try {
            const nameLower=name.toLowerCase(); //* convierte el nombre en minuscula 
           
            const pokemonDB=await Pokemon.findOne({
                where: { name:nameLower}, include: Type
                });
        
            if(pokemonDB) { //* si existe el pokemon en el DB retorna sus propiedades
              const PokemonsDBname={
                id:pokemonDB.id,
                name:pokemonDB.name,
                img:pokemonDB.img,
                hp:pokemonDB.hp,
                attack:pokemonDB.attack,
                defense:pokemonDB.defense,
                specialAttack:pokemonDB.specialAttack,
                specialDefense:pokemonDB.specialDefense,
                speed:pokemonDB.speed,
                height:pokemonDB.height,
                weight:pokemonDB.weight,
                typePrimary:pokemonDB.Types[0]?.name,
                typeSecondary:pokemonDB.Types[1]?.name 
                };
              
              return  PokemonsDBname; 
            }

            const pokemonApi= await Model.getPokemonApi(nameLower); //* si existe el pokemon en la Api retorna sus propiedades
            if(pokemonApi) {return pokemonApi} 
        
            
            } 
          catch (error) {
            throw new Error('Not found!') //*  creacion del error  si no lo consigue 
            } 
    },

    createPokemon:async function(pokemon) {
        //2.4) Función que crea un pokemon y retorna el pokemon creado , si el nombre no existe o ya se encuentra registrado en el DB
        // genera un error y no permite crear el pokemon,

            const {
                name, 
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

              if (!name) {throw new Error('Need to send the name of the pokemon!')}; //*crea un error si no existe el name del pokemon
        
              //* buscamos en el DB si existe un pokemon con ese nombre
              const pokemonDB=await Pokemon.findOne({ where: {name:name.toLowerCase()}});

                  if(pokemonDB ) //* Crea un error si existe  un pokemon con ese nombre en el DB
                 { throw new Error('There is already a pokemon with that name, please choose another name!')};  
                
            
              const Types = await Type.findAll({ attributes: ['id'], where: { name:{[Op.in]: [typePrimary, typeSecondary]} }
              }); //* busca solo los id que corresponden a los tipo de pokemon que se esta creando en la tabla de Type.
              
              let character = { //* se selecciona solo las propiedades necesarias para crear el pokemon
                name:name.toLowerCase(), //* se convierte el nombre en minuscula 
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

              const NewPokemon = await Pokemon.create(character);//* se crea el pokemon en el DB
              await NewPokemon.addTypes(Types); //* se relaciona el pokemon creados con la tabla de tipos de pokemon
                         
              //return NewPokemon; //! no deberia de retornar nada
              return Model.getPokemonByIdDB(NewPokemon.id)
             
      
    }
}

