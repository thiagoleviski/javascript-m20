const {resultado} = require('../03-multiplos.js')

describe('Soma dos múltiplos de 2 números antes de 1000', () => {
    it('Soma dos múltiplos de 3 e 5 antes 1000', () => {
        expect(resultado).toBe(266333)
    });
});
