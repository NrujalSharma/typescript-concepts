/**
 * In case of objects type intersection is combination of the types
 * In case of Union types intersection is the common basic type among the unions
 * 
 * If object types have common field names their types should also be same
 */

 type Admin = {
    name: string;
    priviliges: string[];
}

type Employee = {
    name: string;
    designation: string;
    startDate?: Date;
};

type SpecialEmployee = Admin & Employee;

// Use Intersection of multiple types
const el: SpecialEmployee = {
    name: 'test',
    priviliges: ['READ', 'UPDATE'],
    designation: 'Support Head'
};

type A = string | number;
type B = number | boolean;

// Type C is an intrsection of A and B i.e 'number' as is clear from definitions of A and B
type C = A & B;