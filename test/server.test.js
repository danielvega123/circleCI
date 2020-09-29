test('add 1 + 2 to equal 3', () => {
    expect(require('../operation').addNumer(1, 2)).toBe(3)
})

test('add 1 * 2 to equal 2', () => {
    expect(require('../operation').mulNumber(1, 2)).toBe(2)
})