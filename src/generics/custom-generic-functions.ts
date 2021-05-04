function merge<T, U>(o1: T, o2: U) {
    return Object.assign(o1, o2);
}

const mergedObj = merge({ name: 'Nrujal' }, { age: 22 });

// Get suggestion from typescript because of generics
console.log(mergedObj.age)


type hasLengthProperty = {
    length: number;
}

function count<T extends hasLengthProperty>(param: T) {
    return param.length;
}

console.log(count('asfgsdfgSF'));
console.log(count(['asfgsdfgSF', 'FDHAD', 6845]));