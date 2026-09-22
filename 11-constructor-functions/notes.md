# Constructor Functions — Notes

## 1. Constructor Function

A constructor function is a regular function intended to create and initialize objects when used with `new`.

Naming convention:

User
Product
Account
Student

Constructor names are commonly written using PascalCase.

## 2. The new Operator

When using:

const user = new User("Shafiqul");

Conceptually:

1. A new object is created.
2. The object's `[[Prototype]]` is connected to `User.prototype`.
3. `this` becomes the new object.
4. The constructor function executes.
5. The object is returned.

## 3. this Inside Constructor

Inside a constructor called with `new`:

this = newly created object

Example:

this.name = name;

creates an own property on the new instance.

## 4. Instance Properties

Properties created using `this` inside the constructor belong directly to each instance.

user1.name
user2.name

Each object has its own `name` property.

## 5. Prototype Methods

Shared behavior can be placed on the constructor's prototype.

User.prototype.greet

Instances can access the method through the prototype chain.

## 6. Shared Methods

If multiple instances use the same prototype method:

user1.greet === user2.greet

returns true.

The function exists once on `User.prototype`.

## 7. Constructor vs Prototype

Constructor function:

- Defines how instances are initialized.
- Runs when called with `new`.

Prototype:

- Stores shared properties and methods.
- Is connected to instances created by the constructor.

## 8. Instance vs Constructor

function User() {}

const user = new User();

User
→ constructor function

user
→ instance created from User

User.prototype
→ prototype used by user

## 9. constructor Property

Normally:

User.prototype.constructor === User

Instances can access this through the prototype chain:

user.constructor === User

## 10. instanceof

`instanceof` checks whether a constructor's prototype appears in an object's prototype chain.

user instanceof User

This is true when:

User.prototype

exists somewhere in the prototype chain of `user`.

## 11. Prototype Chain

An instance created with `new User()` commonly has a chain like:

user
↓
User.prototype
↓
Object.prototype
↓
null

## 12. Own vs Inherited

Constructor-created property:

user.hasOwnProperty("name")
→ true

Prototype method:

user.hasOwnProperty("greet")
→ false

But:

"greet" in user
→ true

`hasOwnProperty()` checks own properties only.

`in` checks own + inherited properties.

## 13. Constructor + Prototype + this

Property lookup and `this` are different concepts.

Prototype chain:
→ determines where a property or method is found.

Call site:
→ determines `this` for a normal function.

Example:

user.greet();

Even if `greet` is found on `User.prototype`:

this = user

## 14. Constructor Functions Without new

A constructor function is still a normal function.

Calling it without `new` does not automatically create an object.

In strict mode, `this` can be `undefined`.

Therefore constructor functions should normally be used with `new`.

## 15. Core Mental Model

User constructor
↓
new
↓
instance
/ \
own data [[Prototype]]
↓
User.prototype
↓
shared methods
↓
Object.prototype
↓
null

## 16. Connection With Previous Topics

Objects
→ JavaScript objects contain properties and behavior.

Object Methods & this
→ Methods use `this` based on their call site.

Prototypes
→ Objects can inherit properties and methods through prototype chains.

Constructor Functions
→ Provide a reusable pattern for creating multiple objects with shared behavior.

## Key Takeaways

- Constructor functions are regular functions commonly used with `new`.
- `new` creates and initializes a new object.
- `this` inside a constructor refers to the newly created object.
- Constructor-created properties are own properties.
- Shared methods can be placed on the prototype.
- Multiple instances can share the same prototype method.
- `instanceof` checks the prototype chain.
- `hasOwnProperty()` checks only own properties.
- `in` checks own and inherited properties.
- Prototype lookup and `this` are separate mechanisms.
- Constructor functions are an important bridge toward JavaScript classes and OOP.
