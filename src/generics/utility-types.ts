/**
 * Utility types facilitate common type transformations.
 * More on utility types:
 * https://www.typescriptlang.org/docs/handbook/utility-types.html
 */
 type OptionalParams = {
    a?: number;
    b?: number;
}

type Todo = {
    title: string;
    description: string;
}

// 1. PARTIAL
// Partial utility type allows to accept a partial object defined by a type or interface
function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
    return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
    title: "organize desk",
    description: "clear clutter",
};

const todo2 = updateTodo(todo1, {
    description: "throw out trash",
});

console.log(todo1);
console.log(todo2);

// 2. REQUIRED
const obj1: OptionalParams = { a: 1 };
// This won't work as Required utility type makes all fields in the Type required
// const obj2: Required<OptionalParams> = { a: 1 };
// We have to provide all the prope in the given type (OptionalParams here)
const obj2: Required<OptionalParams> = { a: 1, b: 2 };

// 3. READONLY
const todo3: Readonly<Todo> = {
    title: 'Some title',
    description: 'Some description'
};

// This won't work becausetodo3 is a readonly object and hence its properties cannot be updated
// todo3.title = 'some other title';

// 4. GROUPING UTILITY TYPES
const todo4: Readonly<Partial<Todo>> = {
    title: 'Some title'
};
