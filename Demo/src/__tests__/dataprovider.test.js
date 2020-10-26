const plusThreeNumbers = require('../plus');
describe('Plus', () => {
    it('should 2+3+4=9', () => {
        const result = plusThreeNumbers(2, 3, 4);
        expect(result).toBe(9);
    })
    it('should 4+2+1=7', () => {
        const result = plusThreeNumbers(4, 2, 1);
        expect(result).toBe(7);
    })
    it('should 5+5+5=15', () => {
        const result = plusThreeNumbers(5, 5, 5);
        expect(result).toBe(15);
    })
})

describe('Plus-each', () => {
    it.each([
        [2, 3, 4, 9],
        [4, 2, 1, 7],
        [5, 5, 5, 15]
    ])('%i + %i + %i = %i', (a, b, c, expected) => {
        const result = plusThreeNumbers(a, b, c);
        expect(result).toBe(expected);
    })
})

describe('Plus-each - tagged template literal', () => {
    it.each`
    a | b | c |expected 
    ${2} | ${3} | ${4} | ${9}
    ${4} | ${2} | ${1} | ${7}
    ${5} | ${5} | ${5} | ${15}
    `('$a + $b + $c = $expected', ({ a, b, c, expected }) => {
        const result = a + b + c;
        expect(result).toBe(expected);
    })
})