const d1 = null;
const d2 = undefined;
const d3 = '';
const d4 = 0;
const d5 = false;

console.log(`${d1} || 'DEFAULT' = ${d1 || 'DEFAULT'}`);
console.log(`${d2} || 'DEFAULT' = ${d2 || 'DEFAULT'}`);
console.log(`'${d3}' || 'DEFAULT' = '${d3 || 'DEFAULT'}'`);
console.log(`${d4} || 'DEFAULT' = ${d4 || 'DEFAULT'}`);
console.log(`${d5} || 'DEFAULT' = ${d5 || 'DEFAULT'}`);
console.log('=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=')
console.log(`${d1} ?? 'DEFAULT' = ${d1 ?? 'DEFAULT'}`);
console.log(`${d2} ?? 'DEFAULT' = ${d2 ?? 'DEFAULT'}`);
console.log(`'${d3}' ?? 'DEFAULT' = '${d3 ?? 'DEFAULT'}'`);
console.log(`${d4} ?? 'DEFAULT' = ${d4 ?? 'DEFAULT'}`);
console.log(`${d5} ?? 'DEFAULT' = ${d5 ?? 'DEFAULT'}`);