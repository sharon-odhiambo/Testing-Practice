const capitalizeString = require('./capitalize')

test('returns sharon to equal Sharon', () => {
    expect(capitalizeString('sharon')).toBe('Sharon')
})
