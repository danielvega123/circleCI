test('add 1 + 2 to equal 3', () => {
    expect(require('../server').addNumer(1, 2)).toBe(3)
})