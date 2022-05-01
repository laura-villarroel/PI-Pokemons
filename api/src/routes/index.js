const { Router } = require('express');
const Pokemons = require("./router_Pokemons");
const Types = require("./router_Types");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/pokemons", Pokemons);
router.use("/types", Types);




module.exports = router;
