const {mdc} = require('../01-mdc.js')

describe('funções MDC', () => {
    it('MDC entre dois valores', () => {
        expect(mdc(5,15)).toBe(5)
        expect(mdc(2,2022)).toBe(2)
        expect(mdc(42,49)).toBe(7)
        expect(mdc(5,3)).toBe(1)
        expect(mdc(2022,2)).toBe(2)
    });
});
