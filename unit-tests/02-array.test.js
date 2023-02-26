const {maior,menor} = require('../02-array.js')

describe('Maior e menor index em um array', () => {
    it('index do maior número do array', () => {
        expect(maior).toBe(18)
    });
    it('index do menor número do array', () => {
        expect(menor).toBe(0)
    });
});
