const functions = require ('./functions')

describe('my functions', () => {
    test('property adds 3 + 4 to equal 7', () => {
        expect(functions.add(3,4)).toBe(7)
    })
    test('property subtracts 3 - 4 to equal -1', () => {
        expect(functions.subtract(3,4)).toBe(-1)
    })
    test('property multiplies 3 * 4 to equal 12', () => {
        expect(functions.multiply(3,4)).toBe(12)
    })
    test('property divides 8 / 4 to equal 2', () => {
        expect(functions.divide(8,4)).toBe(2)
    })
});