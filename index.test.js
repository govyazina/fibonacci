const {
    getFibonacciNumberByIndexIter: fibIter,
    getFibonacciNumberByIndexRec: fibRec
} = require('./index')

test('тесты для итеративного метода', () => {
    expect(fibIter(6)).toBe(5)
})
test('тесты для рекурсивного метода', () => {
    expect(fibRec(6)).toBe(5)
})