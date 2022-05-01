const { Router } = require('express');
const { getPokemonTypes} = require("../controllers/types");
const { Op, Pokemon, Type } = require('../db');



const router = Router();

router.get('/', async (req, res) => {
    try {

        let TypesPokemons= await getPokemonTypes()

        res.status(200).send(TypesPokemons)
      
    } catch (error) {
        console.log(error)
    }
})



module.exports = router;