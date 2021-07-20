const { Pokemon, conn } = require('../../src/db.js');

describe('Pokemon model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('No se puede conectar a la base de datos:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Pokemon.sync({ force: true }));
    describe('name', () => {
      it('debería arrojar un error si el nombre es nulo', (done) => {
        Pokemon.create({})
          .then(() => done(new Error('Requiere un nombre válido')))
          .catch(() => done());
      });
      it('debería funcionar cuando es un nombre válido', () => {
        Pokemon.create({ name: 'Pikachu' });
      });
    });
  });
});
