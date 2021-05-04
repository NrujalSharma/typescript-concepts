interface BasicInterface {
    readonly str: string;
    // Optional members need not be used mandatorily
    optionalVar?: number;
}

interface EchoInterface {
    echo(): void;
    // Optional members need not be used mandatorily
    optionalMethod?(): void;
}

// Can implement multiple interfaces
class ImplementTestInterface implements BasicInterface, EchoInterface {
    /**
     * It does not matter if a variable is readonly in the interface
     * Typescript only checks if the variable is present or not
     * It does not check the readonly modifier of the variable while implementing an interface
     */
    constructor(public str: string) {}

    echo() {
        console.log(this.str);
    }
}

const implement_test_interface = new ImplementTestInterface('Test String');
implement_test_interface.echo();
