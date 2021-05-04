class SingletonClass {
    private static instance: SingletonClass;
    regularProperty: number[];

    private constructor(rp: number[]) {
        this.regularProperty = rp;
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new SingletonClass([]);
        }
        return this.instance;
    }

    static echoInstance() {
        console.log(this.instance);
    }
}

// Cannot instantiate singleton class
// const singleton_class = new SingletonClass();

SingletonClass.echoInstance();
const singleton_class1 = SingletonClass.getInstance();
const singleton_class2 = SingletonClass.getInstance();
SingletonClass.echoInstance();

/**
 * If we mutate a property using one object variable, properties in all object variables change
 * Because essentially it is the same variable being returned after once being intialized
 */
console.log(singleton_class1);
console.log(singleton_class2);
singleton_class1.regularProperty.push(1, 2, 3);
console.log(singleton_class1);
console.log(singleton_class2);