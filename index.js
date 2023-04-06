// Итерационный подсчет n-го числа Фибоначчи

function getFibonacciNumberByIndexIter(index) {
    const arrFibonacci = [0, 1]
    for (let i = 0; i < index - 2; i++) {
        let nextNumber = arrFibonacci[i] + arrFibonacci[i + 1]
        arrFibonacci.push(nextNumber)
    }

    return arrFibonacci.pop()
}



// Рекурсивное вычисление n-го числа Фибоначчи

function getFibonacciNumberByIndexRec(index) {
    let number

    return number
}

module.exports = {getFibonacciNumberByIndexIter, getFibonacciNumberByIndexRec}