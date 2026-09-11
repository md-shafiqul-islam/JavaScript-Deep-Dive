# Notes — `this`

## `this`

`this` refers to the value associated with the current function call.

For normal functions, `this` is determined by **how the function is called**.

---

## Method Call

```js
user.greet();
```

When called as `object.method()`:

```text
this === object
```

---

## Regular Function Call

In strict mode:

```js
function showThis() {
  console.log(this);
}

showThis();
```

```text
this === undefined
```

---

## Losing `this`

```js
const fn = user.greet;

fn();
```

A method does not keep its original object when the function reference is separated from the object.

```text
user.greet() → this === user
fn()         → this === undefined
```

---

## Nested Normal Function

A normal function inside a method does **not** inherit the outer function's `this`.

```text
user.greet()
→ this === user

inner()
→ separate function call
→ this === undefined  (strict mode)
```

---

## Arrow Function

Arrow functions do not have their own `this`.

They inherit `this` from the surrounding lexical context.

```text
normal function
→ own this
→ determined by call

arrow function
→ no own this
→ inherits surrounding this
```

---

## `call()`, `apply()`, `bind()`

All three can control `this`.

```text
call(obj)
→ calls immediately
→ arguments separately

apply(obj, [...])
→ calls immediately
→ arguments as an array

bind(obj)
→ returns a new function
→ this is bound for that function
```

---

## Same Function, Different `this`

The same normal function can have different `this` values.

```js
user1.greet();
user2.greet();
```

```text
same function
→ different call sites
→ different this values
```

---

## Scope vs `this`

These are different mechanisms.

```text
Scope
→ where the function is defined
→ determines variable lookup

this
→ how the function is called
→ determines this value
```

Arrow functions are the important connection:

```text
Arrow function
→ lexical this
→ inherits from surrounding context
```

---

## Core Mental Model

```text
Normal function
→ this = call site

Arrow function
→ this = surrounding lexical context
```
