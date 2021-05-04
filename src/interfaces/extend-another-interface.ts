interface StrInterface {
    str: string;
}

interface InterfaceExtendsInterface extends StrInterface {
    echo(str: string): void;
}

class ImplementInterfaceExtendsInterface implements InterfaceExtendsInterface {
    constructor(public readonly str: string) { }

    echo() {
        console.log(this.str);
    }
}

const implement_interface_extends_interface = new ImplementInterfaceExtendsInterface('Test String');
implement_interface_extends_interface.echo();
