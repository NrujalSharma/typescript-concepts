/**
 * 'Index Types' are flexible types
 * We can define the type of the keys an object can contain
 * and the type of the values that the keys can hold
 * 
 * Thus we can add as many entries to the object using the 'Index Type'
 * 
 * We can also add mandatory properties but the mandatory properties
 * can only hold the data of type specified by the dynamic property in the type
 */

 interface ErrorContainer {
    // _id: number; // This will throw an error
    id: string;
    [prop: string]: string;
}

const errors: ErrorContainer = {
    id: 'sign-up form',
    email: 'Invalid Email',
    username: 'User name should only contain characters and spaces'
}
