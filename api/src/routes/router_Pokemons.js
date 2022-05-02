const { Router } = require('express');
const { getAllPokemons, getPokemonById,getPokemonByName, createPokemon} = require("../controllers/pokemons");



const router = Router();


router.get('/', async (req, res) => {
    try {
      const {name} = req.query;
   
      if (name){
       let getPokemon= await getPokemonByName(name)
      return res.status(200).json(getPokemon)  
      }

      let PokemonsApi= await  getAllPokemons()
      return res.status(200).json(PokemonsApi)
     
    } catch (error) {
      return res.status(400).json({error:error.message})    
    } 
   
   })
   
   router.get('/:id', async (req, res) => {
       try {
        const id=req.params.id

        let PokemonApi= await  getPokemonById(id)
        res.status(200).json(PokemonApi)
   
       } catch (error) {
        return res.status(400).json({error:error.message})
       }
   })
   
   router.post('/', async (req, res) => {
       
     try {
        await createPokemon(req.body)
       res.status(201).json({msg:'successfully created pokemon'});

     } catch (error) {
       res.status(404).json({error:error.message});
     }
   })

module.exports = router;