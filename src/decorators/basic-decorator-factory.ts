function DecoratorFactory(str: string) {
    // '_' tells typescript that we know we're getting a parameter but we do not want to use it
    return function(_: any) {
        console.log(str);
    }
}

// Using a decorator factory we need to execute the factory
// This allows us to pass parameters to decorators
@DecoratorFactory('Test String')
class UseDecoratorFactory {

}