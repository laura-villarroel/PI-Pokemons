const { Router } = require('express');
const { getAllPokemons, getPokemonById} = require("../controllers/pokemons");
const { Op, Pokemon, Type } = require('../db');



const router = Router();


router.get('/', async (req, res) => {
    try {
       
   
      //let PokemonsApi= await  getPokemons40()
      let PokemonsApi= await  getAllPokemons()

      res.status(200).send(PokemonsApi)
   
    } catch (error) {
        console.log(error)
        
    } 
   
   })
   
   router.get('/:id', async (req, res) => {
       try {
        const id=req.params.id
        //let PokemonApi= await  getPokemonByIdApi(id)
        let PokemonApi= await  getPokemonById(id)
       
        res.status(200).send(PokemonApi)
   
       } catch (error) {
           console.log(error)
       }
   })
   
   router.post('/', async (req, res) => {
       const {name} = req.body;
     //console.log(req.body)
     if (!name)
       return res.status(404).send('Falta enviar datos obligatorios');
     try {
       const NewPokemon = await Pokemon.create(req.body);
       res.status(201).json(NewPokemon);
     } catch (error) {
       res.status(404).send('Error en alguno de los datos provistos');
     }
   })


module.exports = router;