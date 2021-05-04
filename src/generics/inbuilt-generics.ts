/**
 * Generics programming can be used to make reusable code
 * which is flexible with the data types
 * 
 * Not the same as 'any' type
 * Using generics we define a data type while intializing
 */

 let arr: Array<string | number | Array<string>>;
 arr = ['asd', 13, ['sdrthasd']];
 
 const promise: Promise<string> = new Promise(resolve => {
     setTimeout(() => {
         resolve('This is an example')
     }, 3000);
 });
 
 promise.then(data => console.log(data.split(' ')))