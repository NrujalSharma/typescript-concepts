type numOp = (num1: number, num2: number) => number;

const add: numOp = (n1: number, n2: number) => {
    return n1 + n2;
}

const subtract: numOp = (n1: number, n2: number) => {
    return n1 - n2;
}

const multiply: numOp = (n1: number, n2: number) => {
    return n1 * n2;
}

const divide: numOp = (n1: number, n2: number) => {
    return n1 / n2;
}

console.log(add(3, 2));
console.log(subtract(3, 2));
console.log(multiply(3, 2));
console.log(divide(3, 2));
