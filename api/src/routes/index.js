const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
const PokemonRoutes = require('./pokemon')
const TipoRoutes = require('./tipo')


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/', PokemonRoutes);
router.use('/', TipoRoutes);


module.exports = router;
