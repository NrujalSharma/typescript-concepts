/**
 * A decorator is a function that gets executed when an entity using it is defined
 * Not when instantiated or executed but when defined
 * @param constructor - A decorator receives the constructor as a parameter when applied to a class
 */
 function Logger(func: Function) {
    console.log('Inside Logger Decorator....');
    console.log(func);
}

// We should not execute a first class decorator while using i.e no '()' following the decorator
@Logger
class Person {
    name = 'Max';

    constructor() {
        console.log('Creating Person....')
    }
}
