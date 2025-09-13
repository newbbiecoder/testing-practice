const script = require('./script');

// Capitalise first letter
describe('capitalise the first letter', () => {
    it('Test 1', () => {
        expect(script.capitalise('himachal')).toBe('Himachal');
    })
    it('Test 2', () => {
        expect(script.capitalise('noob')).toBe('Noob');
    })
})

// Reverse the string
describe('reverses the string', () => {
    it('Test 1', () => {
        expect(script.reverseString('Peter')).toBe('reteP');
    })
    it('Test 2', () => {
        expect(script.reverseString('Nope')).toBe('epoN');
    })
})

// Calculator functions
describe('calculator functions', () => {
    it('Addition', () => {
        expect(script.calculator.add(5,5)).toBe(10);
    })
    it('Subtraction', () => {
        expect(script.calculator.sub(10,5)).toBe(5);
    })
    it('Divide', () => {
        expect(script.calculator.div(20,5)).toBe(4);
    })
    it('Multiplication', () => {
        expect(script.calculator.mult(4,3)).toBe(12);
    })
})

describe('Caesar Cipher function', () => {
    it('Base test', () => {
        expect(script.caesarCipher('xyz', 3)).toBe('abc');
    })
    it('Lettercase test', () => {
        expect(script.caesarCipher('HeLLo', 3)).toBe('KhOOr');
    })
    it('Non Alphabatic characters test', () => {
        expect(script.caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
    })
})