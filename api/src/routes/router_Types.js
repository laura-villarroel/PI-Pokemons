const { Router } = require('express');
const {  Type } = require('../db');



const router = Router();

router.get('/', async (req, res) => {
    try {

        let TypesPokemons= await Type.findAll()
        res.status(200).send(TypesPokemons)
      
    } catch (error) {
        return res.status(400).json({error})
    }
})

module.exports = router;