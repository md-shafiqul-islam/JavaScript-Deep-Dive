# Object-Oriented JavaScript — Notes

## 1. OOP

Object-Oriented Programming organizes software around objects that contain data and behavior.

Common OOP concepts:

- Encapsulation
- Inheritance
- Polymorphism
- Abstraction

---

## 2. Encapsulation

Encapsulation keeps related data and behavior together and controls access to internal state.

JavaScript private class fields use `#`.

Key idea:

Data + behavior
→ controlled access

---

## 3. Inheritance

Inheritance allows a class to reuse behavior from another class.

`extends` creates an inheritance relationship.

Conceptually:

Child
→ Parent

In JavaScript, class inheritance is implemented through the prototype chain.

---

## 4. Polymorphism

Polymorphism means the same method/interface can behave differently depending on the object.

Common mechanism:

- Method overriding

Example concept:

Dog → speak() → bark

Cat → speak() → meow

Same method name, different behavior.

---

## 5. Abstraction

Abstraction hides unnecessary implementation details and exposes a simpler interface.

Focus:

What an object provides
rather than
how every internal step works.

---

## 6. Encapsulation vs Abstraction

Encapsulation:

- Organizes and protects internal state.
- Controls access to data.

Abstraction:

- Hides implementation complexity.
- Provides a simpler interface.

---

## 7. `extends`

`extends` establishes inheritance between classes.

The child class can:

- Reuse parent behavior.
- Add new behavior.
- Override parent methods.

---

## 8. `super`

`super.method()` accesses the parent method implementation.

`super()` calls the parent constructor.

In a derived constructor:

`super()` must execute before using `this`.

---

## 9. Method Overriding

A child class can define a method with the same name as a parent method.

Property lookup finds the child implementation first.

Child implementation overrides the inherited behavior.

---

## 10. `this` with Inheritance

`super` changes where the method implementation is found.

It does not change the current object.

Important rule:

Inheritance determines where a method is found.

The method call determines `this`.

---

## 11. Prototype Chain

Class inheritance is based on prototype inheritance.

Example:

Object instance
→ Child.prototype
→ Parent.prototype
→ Object.prototype
→ null

---

## 12. `instanceof`

`instanceof` checks whether a constructor's prototype exists in an object's prototype chain.

Therefore a child instance can be an instance of both the child and parent classes.

---

## 13. `hasOwnProperty()`

`hasOwnProperty()` checks only own properties.

It does not count inherited properties.

Instance data created with `this` is usually an own property.

Class methods are usually inherited from the prototype.

---

## 14. Private Fields

Fields declared with `#` are private to the class.

They cannot be accessed directly from outside the class.

Private state is accessed through class methods.

---

## 15. Composition vs Inheritance

Inheritance:

"is-a"

Example:

Manager is an Employee.

Composition:

"has-a"

Example:

Employee has a Logger.

Composition allows behavior to be combined without creating an inheritance relationship.

---

## 16. OOP and JavaScript

Classes do not replace prototypes.

Classes provide syntax for working with JavaScript's prototype-based object system.

Class
→ instance
→ prototype
→ prototype chain

---

## 17. Core Mental Model

Encapsulation
→ control internal state

Inheritance
→ reuse behavior

Polymorphism
→ same interface, different behavior

Abstraction
→ hide unnecessary complexity

---

## 18. Important Connections

Objects
→ Object Methods
→ `this`
→ Prototypes
→ Constructor Functions
→ Classes
→ Inheritance
→ OOP

---

## 19. Key Takeaways

- OOP organizes data and behavior around objects.
- Encapsulation controls internal state.
- Inheritance enables behavior reuse.
- Polymorphism allows different implementations of the same interface.
- Abstraction hides unnecessary complexity.
- JavaScript inheritance is prototype-based.
- Classes use prototypes internally.
- `extends` establishes inheritance.
- `super` accesses parent implementations.
- `super` does not change `this`.
- `instanceof` checks the prototype chain.
- `hasOwnProperty()` checks own properties only.
- Composition represents "has-a".
- Inheritance represents "is-a".
- OOP is a design approach, not a requirement for every JavaScript program.

## Most Important Rule

Inheritance determines where JavaScript finds a method.

The method call determines `this`.
