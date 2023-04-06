// Итерационный подсчет n-го числа Фибоначчи

function getFibonacciNumberByIndexIter(index) {
    const arrFibonacci = [0, 1]
    for (let i = 0; i < index - 2; i++) {
        let nextNumber = arrFibonacci[i] + arrFibonacci[i + 1]
        arrFibonacci.push(nextNumber)
    }

    return arrFibonacci[index - 1]
}



// Рекурсивное вычисление n-го числа Фибоначчи

function getFibonacciNumberByIndexRec(index) {
    if (index === 1) {
        return 0
    }
    else if (index === 2) {
        return 1
    }
    return getFibonacciNumberByIndexRec(index - 1) + getFibonacciNumberByIndexRec(index - 2)
}

getFibonacciNumberByIndexRec(4)

module.exports = {getFibonacciNumberByIndexIter, getFibonacciNumberByIndexRec}