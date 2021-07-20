const { Router } = require('express');
const { getPokemons, addPokemon, getPokemonID, getPokemonAdd } = require('../controllers/pokemon');
const router = Router();

router.get('/pokemons', getPokemons);
router.get('/pokemons/:id', getPokemonID);
router.post('/pokemons', addPokemon);
router.get('/pokemonsCreated', getPokemonAdd);

module.exports = router;