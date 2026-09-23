## 2. `classes/notes.md`

```md
# Classes — Notes

## 1. Class

A class provides a cleaner syntax for creating objects and working with prototypes.

Classes are still built on JavaScript's prototype-based object model.

## 2. constructor()

The `constructor()` method initializes a new instance.

class User {
constructor(name) {
this.name = name;
}
}

## 3. Creating Instances

Use `new` to create an instance.

const user = new User("Shafiqul");

`new` creates the object and connects it to the class prototype.

## 4. Class Methods

Methods defined inside a class are placed on the class prototype.

class User {
greet() {
console.log(`Hello ${this.name}`);
}
}

Conceptually:

user
↓
User.prototype
↓
greet()

## 5. Shared Methods

Multiple instances share the same prototype method.

user1.greet === user2.greet
→ true

The method is not recreated for every instance.

## 6. this in Class Methods

For a method call:

user.greet()

`this` refers to `user`.

The class syntax does not change the basic method-call mental model.

## 7. Static Methods

A static method belongs to the class itself rather than its instances.

class Calculator {
static add(a, b) {
return a + b;
}
}

Call:

Calculator.add(10, 20)

A static method is not available through an instance.

## 8. Inheritance

Use `extends` to create inheritance.

class Dog extends Animal {}

The child class inherits through the prototype chain.

## 9. Prototype Chain With Inheritance

dog
↓
Dog.prototype
↓
Animal.prototype
↓
Object.prototype
↓
null

## 10. super

`super` allows a child class to access parent functionality.

super.speak()

This calls the parent implementation of `speak()`.

## 11. Parent Constructor

A child constructor can call the parent constructor using:

super(name)

This initializes the inherited part of the object.

## 12. super() Before this

In a derived class constructor, `super()` must be called before using `this`.

Correct order:

super(name)
this.breed = breed

## 13. Method Overriding

A child class can define a method with the same name as a parent method.

The child implementation is found first during property lookup.

Child method
→ overrides parent method

## 14. instanceof

`instanceof` checks whether a constructor's prototype exists in an object's prototype chain.

admin instanceof User
→ true

if:

User.prototype

exists somewhere in the chain.

## 15. hasOwnProperty()

Class methods are normally inherited through the prototype.

instance.hasOwnProperty("method")
→ false

Instance properties created with `this` are own properties.

instance.hasOwnProperty("name")
→ true

## 16. super and this

When a child method calls:

super.greet()

the parent implementation executes, but `this` still refers to the current instance.

admin.greet()
→ this = admin
→ super.greet()
→ User.prototype.greet()
→ this is still admin

## 17. Constructor Functions vs Classes

Constructor function:

function User(name) {
this.name = name;
}

User.prototype.greet = function () {
console.log(`Hello ${this.name}`);
};

Class:

class User {
constructor(name) {
this.name = name;
}

    greet() {
        console.log(`Hello ${this.name}`);
    }

}

Class syntax provides a cleaner way to express the same prototype-based object model.

## 18. Core Mental Model

Class
↓
new
↓
instance
↓
[[Prototype]]
↓
Class.prototype
↓
shared methods

With inheritance:

instance
↓
Child.prototype
↓
Parent.prototype
↓
Object.prototype
↓
null

## 19. Connection With Previous Concepts

Objects
→ store data and behavior.

Object Methods & this
→ method call determines `this`.

Prototypes
→ provide property lookup and inheritance.

Constructor Functions
→ create reusable object instances with `new`.

Classes
→ provide cleaner syntax for constructors, methods, and inheritance.

## Key Takeaways

- Classes are syntax built on JavaScript's prototype system.
- `constructor()` initializes instances.
- `new` creates class instances.
- Class methods are stored on the prototype.
- Multiple instances share prototype methods.
- `this` in a method refers to the calling instance.
- `static` methods belong to the class itself.
- `extends` creates inheritance.
- `super()` calls the parent constructor.
- `super.method()` accesses a parent method.
- Child classes can override parent methods.
- `instanceof` checks the prototype chain.
- Classes make object-oriented JavaScript easier to express.
```
