interface CommonMemberInterfaceA {
    readonly str: string;
    echo(str: string): void;
}

interface CommonMemberInterfaceB {
    str: string
    echo(str: string): string;
}

/**
 * Can implement interfaces with common methods
 * Typescript only checks method name
 * Parameters and return types defined in the interfaces do not matter
 */
class ImplementCommonMemberInterfaces implements CommonMemberInterfaceA, CommonMemberInterfaceA {
    constructor(public str: string) {}

    echo() {
        console.log(this.str);
    }
}

const implement_common_member_interfaces = new ImplementCommonMemberInterfaces('Hello');
implement_common_member_interfaces.echo();
