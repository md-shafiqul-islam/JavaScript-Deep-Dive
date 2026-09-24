# Object-Oriented JavaScript

Object-Oriented Programming (OOP) is a way of designing software around objects that combine data and behavior.

## Topics Covered

- Object-Oriented Programming
- Encapsulation
- Private class fields
- Inheritance
- Polymorphism
- Abstraction
- `extends`
- `super`
- Method overriding
- Prototype-based inheritance
- Composition vs inheritance
- OOP and JavaScript prototypes
- Real-world object modeling

## Key Concepts

### Encapsulation

Keeping related data and behavior together while controlling access to internal state.

### Inheritance

Allowing one class or object to reuse behavior from another.

### Polymorphism

Allowing the same method/interface to behave differently depending on the object.

### Abstraction

Hiding unnecessary implementation details behind a simpler interface.

## Important JavaScript Connection

Classes are built on top of JavaScript's prototype system.

```text
Object
  ↓
Prototype
  ↓
Constructor Functions
  ↓
Classes
  ↓
Inheritance
  ↓
OOP
```

## Core Mental Model

```text
Inheritance
    ↓
Prototype Chain
    ↓
Method Lookup

Call Site
    ↓
this
```

## Important Rule

Inheritance determines where JavaScript finds a method.

The method call determines this.
