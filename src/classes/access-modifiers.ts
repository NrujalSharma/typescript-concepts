class AccessModifiers {
    readonly myReadonlyVar: string;
    private myPrivateVar: string;
    protected myProtectedVar: string;
    // By default all are public
    public myPublicVar: string;

    constructor(ro: string, pri: string, pro: string, pub: string) {
        this.myReadonlyVar = ro;
        this.myPrivateVar = pri;
        this.myProtectedVar = pro;
        this.myPublicVar = pub;
    }

    changeValues(str: string) {
        // Cannot change value in a readonly variable
        // this.myReadonly = str;
        this.myPrivateVar = str;
    }
    
    private echoParentPrivate() {
        console.log('READONLY:', this.myReadonlyVar);
        console.log('PRIVATE:', this.myPrivateVar);
        console.log('PROTECTED:', this.myProtectedVar);
        console.log('PUBLIC:', this.myPublicVar);
    }
    
    protected echoParentProtected() {
        this.echoParentPrivate();
    }

    echoParentPublic() {
        this.echoParentPrivate();
    }

}

class ExtendAccessModifiers extends AccessModifiers {
    constructor(ro: string, pri: string, pro: string, pub: string) {
        super(ro, pri, pro, pub);
    }

    echoChild() {
        console.log('CHILD READONLY:', this.myReadonlyVar);
        // Cannot access private members outside the class
        // console.log('CHILD PRIVATE:', this.myPrivateVar);
        console.log('CHILD PROTECTED:', this.myProtectedVar);
        console.log('CHILD PUBLIC:', this.myPublicVar);
    }

    echoFromParent() {
        // Cannot access private members outside the class
        // this.echoParentPrivate();
        console.log('Echoing Protected from Parent');
        this.echoParentProtected();
        console.log('Echoing Public from Parent');
        this.echoParentPublic();
    }
}

const access_modifiers = new ExtendAccessModifiers('readonly', 'private', 'protected', 'public');

access_modifiers.echoParentPublic();
// Protected members only accessible in class and subclasses
// console.log(access_modifiers.myProtectedVar);
// access_modifiers.echoParentProtected();

access_modifiers.echoChild();
access_modifiers.echoFromParent();