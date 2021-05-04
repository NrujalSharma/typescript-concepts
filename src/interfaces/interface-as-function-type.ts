interface numOperation {
    (num1: number, num2: number): number;
}

const ADD: numOp = (n1: number, n2: number) => {
    return n1 + n2;
}

const SUBTRACT: numOp = (n1: number, n2: number) => {
    return n1 - n2;
}

const MULTIPLY: numOp = (n1: number, n2: number) => {
    return n1 * n2;
}

const DIVIDE: numOp = (n1: number, n2: number) => {
    return n1 / n2;
}

console.log(ADD(3, 2));
console.log(SUBTRACT(3, 2));
console.log(MULTIPLY(3, 2));
console.log(DIVIDE(3, 2));