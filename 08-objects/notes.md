# Objects & Object References — Notes

## 1. Object

An object is a collection of key-value pairs.

- `name` and `age` are properties.
- Property values can be primitives, objects, arrays, or functions.

## 2. Property Access

### Dot Notation

`user.name`

### Bracket Notation

`user["name"]`

Use bracket notation when the property name is stored in a variable.

Example:

`const key = "name";`
`user[key];`

## 3. Add, Update & Delete

- Add: `user.city = "Dhaka";`
- Update: `user.age = 31;`
- Delete: `delete user.city;`

## 4. Primitive vs Object Assignment

### Primitive

Primitive assignment copies the value.

`let a = 10;`
`let b = a;`

Changing `b` does not affect `a`.

### Object

Object assignment copies the reference.

`const a = { name: "Shafiqul" };`
`const b = a;`

Changing the object through `b` also affects the object accessed through `a`.

## 5. Object Reference

Two variables can refer to the same object.

`a ──────┐`
`        ↓`
`     Object`
`        ↑`
`b ──────┘`

Same reference → same object.

## 6. Object Equality

Objects are compared by reference, not by their properties.

`const a = { name: "Shafiqul" };`
`const b = { name: "Shafiqul" };`

`a === b; // false`

They contain the same data but are different objects.

If another variable refers to the same object:

`const c = a;`

`a === c; // true`

## 7. Nested Objects

Objects can contain other objects.

`const user = {`
`  name: "Shafiqul",`
`  address: {`
`    city: "Gazipur",`
`  },`
`};`

If the outer object is shared, its nested object can also be accessed through that shared reference.

`const person = user;`
`person.address.city = "Dhaka";`

`user.address.city` is also `"Dhaka"`.

## 8. Objects & Functions

Objects can be passed to functions.

A function can modify the original object because it receives access to the same object.

`function updateUser(user) {`
`  user.name = "Rahim";`
`}`

## 9. Objects & Closures

A closure can retain access to an object from an outer lexical environment.

`function createUser() {`
`  const user = {`
`    name: "Shafiqul",`
`  };`

`  return function () {`
`    return user.name;`
`  };`
`}`

The returned function retains access to `user`.

## 10. Connection With Previous Concepts

Scope
↓
Object variable exists inside a lexical environment
↓
Execution Context
↓
Object operations execute inside the current context
↓
Functions
↓
Functions can receive and return objects
↓
Closures
↓
A function can retain access to an outer object
↓
this
↓
Object methods use `this` to access the related object

## 11. Core Mental Model

Primitive assignment
→ Copies the value

Object assignment
→ Copies the reference

Same reference
→ Same object

Different object creation
→ Different object and reference

Object === Object
→ Compares references

## Key Takeaways

- Objects store data as key-value pairs.
- Dot and bracket notation access properties.
- Objects are reference values.
- Assigning an object copies its reference.
- Multiple variables can point to the same object.
- `===` checks whether two variables reference the same object.
- Nested objects can also be shared through a shared outer reference.
- Functions can modify objects they receive.
- Closures can retain access to objects from outer scopes.
