const { Router } = require('express');
const { getAllPokemons, getPokemonById,getPokemonByName, createPokemon} = require("../controllers/pokemons");
const { Op, Pokemon, Type } = require('../db');



const router = Router();


router.get('/', async (req, res) => {
    try {
      const {name} = req.query;
   
      if (name){
       let getPokemon= await getPokemonByName(name)
      return res.status(200).send(getPokemon)
      }

      //let PokemonsApi= await  getPokemons40()
      let PokemonsApi= await  getAllPokemons()

      res.status(200).send(PokemonsApi)
   
    } catch (error) {
      return res.status(400).json({error:error.message})
        
    } 
   
   })
   
   router.get('/:id', async (req, res) => {
       try {
        const id=req.params.id
        //let PokemonApi= await  getPokemonByIdApi(id)
        let PokemonApi= await  getPokemonById(id)
       
        res.status(200).send(PokemonApi)
   
       } catch (error) {
        return res.status(400).json({error:error.message})
       }
   })
   
   router.post('/', async (req, res) => {
       const {name} = req.body;
     //console.log(req.body)
     if (!name)
       return res.status(404).send('Falta enviar datos obligatorios');
     try {
      const NewPokemon= await createPokemon(req.body)
      
      
      //const NewPokemon = await Pokemon.create(req.body);
       res.status(201).json(NewPokemon);
     } catch (error) {
       res.status(404).send('Error en alguno de los datos provistos');
     }
   })


module.exports = router;