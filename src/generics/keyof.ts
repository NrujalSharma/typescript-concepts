// The 'extends keyof' makes sure that the key param is always present in the obj passed
function extractValue<T extends object, U extends keyof T>(obj: T, key: U) {
    return obj[key];
}

console.log(extractValue({
    name: 'Nrujal',
    age: 22
}, 'name'));