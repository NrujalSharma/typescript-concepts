class TryStatic {
    static age: number;

    constructor(age: number) {
        TryStatic.age = age;
    }

    echoNonStatic() {
        // This won't work
        // console.log('Age is', this.age);
        // Use class name to access static properties in non-static methods
        console.log('Age is', TryStatic.age);
    }

    static echoStatic() {
        console.log('Age is', this.age);
    }
}

const try_static = new TryStatic(21);

// Cannot access static properties through objects
// console.log(try_static.age);
// try_static.echoStatic();

// Can access non static members from object
try_static.echoNonStatic();

// Can access static members by class name
console.log(TryStatic.age);
TryStatic.echoStatic();