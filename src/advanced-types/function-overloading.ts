/**
 * The overloads should always be compatible with the types of
 * the main function definition (the last definition)
 */
type strNum = number | string;

function overloadedAdd(a: string, b: string): string;
function overloadedAdd(a: number, b: number): number;
function overloadedAdd(a: number, b: string): string;
function overloadedAdd(a: string, b: number): string;
function overloadedAdd(a: strNum, b: strNum) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    return a.toString() + b.toString();
}

console.log(overloadedAdd('str', 'ing'));
console.log(overloadedAdd(1, 2));
console.log(overloadedAdd('str', 2));
console.log(overloadedAdd(1, 'ing'));
