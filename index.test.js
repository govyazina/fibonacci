const {
    getFibonacciNumberByIndexIter: fibIter,
    getFibonacciNumberByIndexRec: fibRec
} = require('./index')

test('тесты для итеративного метода', () => {
    expect(fibIter(1)).toBe(0)
    expect(fibIter(2)).toBe(1)
    expect(fibIter(3)).toBe(1)
    expect(fibIter(4)).toBe(2)
    expect(fibIter(5)).toBe(3)
    expect(fibIter(6)).toBe(5)
    expect(fibIter(7)).toBe(8)
    expect(fibIter(8)).toBe(13)
    expect(fibIter(9)).toBe(21)
    expect(fibIter(10)).toBe(34)
    expect(fibIter(20)).toBe(4181)
})
test('тесты для рекурсивного метода', () => {
    expect(fibRec(1)).toBe(0)
    expect(fibRec(2)).toBe(1)
    expect(fibRec(3)).toBe(1)
    expect(fibRec(4)).toBe(2)
    expect(fibRec(5)).toBe(3)
    expect(fibRec(6)).toBe(5)
    expect(fibRec(7)).toBe(8)
    expect(fibRec(8)).toBe(13)
    expect(fibRec(9)).toBe(21)
    expect(fibRec(10)).toBe(34)
    expect(fibRec(20)).toBe(4181)
})