abstract class IAbstract {
    protected name = 'Nrujal1';

    abstract greet(name: string): void;
    
    echo() {
        console.log(this.name);
    }
}

class ImlpementAbstract1 extends IAbstract {
    constructor() {
        super();
    }
    
    greet() {
        console.log('Hello', this.name);
    }
}

class ImlpementAbstract2 extends IAbstract {
    constructor(protected name: string) {
        super();
    }
    
    greet() {
        console.log('Hello', this.name);
    }
}

// Cannot create objects of abstract classes
// const iabstract = new IAbstract();

const imlpement_abstract_1 = new ImlpementAbstract1();
imlpement_abstract_1.greet();

const imlpement_abstract_2 = new ImlpementAbstract2('Nrujal2');
imlpement_abstract_2.greet();
