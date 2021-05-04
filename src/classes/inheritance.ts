// class Test {
//     private name: string;

//     constructor(n: string) {
//         this.name = n;
//     }

//     printName() {
//         console.log(this.name);
//     }
// }

// const test = new Test('some name');
// test.printName();

// const test2 = new Test('some name 2');
// test2.printName();

class Parent {
    constructor(private readonly id: number, private name: string) { }
    print() {
        console.log('From Parent', this.id, this.name);
    }
}

class Child extends Parent {
    constructor(id: number) {
        super(id, 'Child')
    }

    print() {
        console.log('Calling from child')
        super.print();
    }
}

const c = new Child(21);
console.log(c)
c.print();
