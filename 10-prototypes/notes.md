# Prototypes & Prototype Chain — Notes

## 1. Prototype

A prototype is an object that another object can use for property and method lookup.

Conceptually:

object
↓
prototype
↓
prototype's prototype
↓
null

## 2. Own vs Inherited Properties

Own property:

- Directly belongs to the object.

Inherited property:

- Found somewhere in the object's prototype chain.

Example:

user.name
→ own property

user.toString
→ inherited from Object.prototype

## 3. Property Lookup

When accessing:

object.property

JavaScript:

1. Checks the object itself.
2. If not found, checks its prototype.
3. Continues through the prototype chain.
4. Stops when the property is found.
5. If the chain reaches `null`, returns `undefined`.

## 4. Prototype Chain

A prototype chain can look like:

object
↓
prototype
↓
prototype
↓
Object.prototype
↓
null

The chain allows objects to access inherited properties and methods.

## 5. Object.prototype

Most ordinary objects ultimately inherit from `Object.prototype`.

Common inherited methods include:

- `toString()`
- `hasOwnProperty()`

Example:

user.toString()

`toString` does not need to be directly stored on `user`.

## 6. Object.getPrototypeOf()

`Object.getPrototypeOf(object)` returns the object's prototype.

Example:

Object.getPrototypeOf(user)

This can be used to inspect the prototype relationship.

## 7. Object.create()

`Object.create(prototype)` creates a new object whose prototype is the supplied object.

Example:

const user = Object.create(person);

Relationship:

user
↓
person

## 8. Property Shadowing

If an object creates its own property with the same name as an inherited property, the own property is found first.

Example:

person.name = "Person";

user.name = "Shafiqul";

Now:

user.name
→ "Shafiqul"

person.name
→ "Person"

The own property on `user` shadows the inherited property.

## 9. hasOwnProperty()

`hasOwnProperty()` checks only the object's own properties.

user.hasOwnProperty("name")
→ true

user.hasOwnProperty("toString")
→ false

Even if `toString` is available through the prototype chain, it is not an own property.

## 10. in Operator

The `in` operator checks both own and inherited properties.

"name" in user
→ true

"toString" in user
→ true

Difference:

hasOwnProperty()
→ own properties only

in
→ own + inherited properties

## 11. Shared Prototype Methods

Multiple objects can use the same method through a shared prototype.

user
↓
person
└── greet()

admin
↓
person
└── greet()

The method can be shared instead of being separately stored on every object.

## 12. Prototype Lookup vs this

These are different mechanisms.

Prototype lookup:
→ determines where the property or method is found.

`this`:
→ for a normal function, depends on how the function is called.

Example:

user.greet();

JavaScript may find `greet` on `person`, but:

this = user

because the call is:

user.greet()

## 13. Prototype Method and this

A method can be inherited from a prototype while `this` refers to the object that called it.

Example concept:

user
↓
person
└── greet()

user.greet()
→ greet found on person
→ this = user

## 14. Multi-Level Prototype Chain

Example relationship:

child
↓
parent
↓
grandParent
↓
Object.prototype
↓
null

Property lookup can travel through every level.

## 15. Connection With Previous Concepts

Day 08 — Objects & Object References
→ Objects contain properties and can reference other objects.

Day 09 — Object Methods & this
→ Methods provide behavior and `this` depends on the call site.

Day 10 — Prototypes
→ Objects can inherit access to properties and methods through prototype chains.

## Core Mental Model

Object
→ own properties
→ [[Prototype]]
→ prototype properties
→ [[Prototype]]
→ continue lookup
→ null

Property lookup:
→ object
→ prototype
→ prototype
→ ...
→ null

`hasOwnProperty()`
→ own properties only

`in`
→ own + inherited properties

`Object.create()`
→ creates object with specified prototype

Normal function `this`
→ determined by call site

Prototype
→ determines where missing properties/methods are searched

## Key Takeaways

- Objects can inherit properties and methods through prototypes.
- Own properties belong directly to the object.
- Inherited properties are found through the prototype chain.
- JavaScript searches the prototype chain when a property is not found directly.
- `Object.prototype` is the common final prototype for ordinary objects.
- `Object.getPrototypeOf()` can inspect an object's prototype.
- `Object.create()` can create an object with a specific prototype.
- Own properties can shadow inherited properties.
- `hasOwnProperty()` checks own properties only.
- `in` checks own and inherited properties.
- Multiple objects can share methods through a prototype.
- Prototype lookup and `this` are different mechanisms.
- A method can be found on a prototype while `this` refers to the object that called it.
