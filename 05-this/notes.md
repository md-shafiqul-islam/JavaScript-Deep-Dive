# Notes — `this`

## 1. What Is `this`?

`this` is a special keyword whose value depends on how a function is called.

For normal functions, `this` is generally determined at runtime by the call site.

---

## 2. Method Call

Example:

```js
const user = {
  name: "Shafiqul",

  greet() {
    console.log(this.name);
  },
};

user.greet();
```

Output: Shafiqul

Here: this === user

The object before the dot becomes `this`.

---

## 3. Same Function, Different Objects

Example:

```js
const user1 = {
  name: "Alice",
};

const user2 = {
  name: "Bob",
};

function greet() {
  console.log(this.name);
}

user1.greet = greet;
user2.greet = greet;

user1.greet();
user2.greet();
```

Output: Alice Bob

The same function is used in both cases.

The call site determines `this`.

user1.greet()
→ this === user1

user2.greet()
→ this === user2

---

## 4. Regular Function Call

Example:

```js
"use strict";

function showThis() {
  console.log(this);
}

showThis();
```

Output: undefined

A regular function called without an object has:

this === undefined

when strict mode is enabled.

---

## 5. Losing `this`

Example:

```js
"use strict";

const user = {
  name: "Shafiqul",

  greet() {
    console.log(this.name);
  },
};

user.greet();

const fn = user.greet;

fn();
```

First call: this === user

Second call: this === undefined

Assigning the method to another variable does not preserve the original object as `this`.

---

## 6. Normal Function Inside a Method

Example:

```js
"use strict";

const user = {
  name: "Shafiqul",

  greet() {
    function inner() {
      console.log(this);
    }

    inner();
  },
};

user.greet();
```

Inside greet(): this === user

Inside inner(): this === undefined

`inner()` is a separate normal function.

Its `this` is determined by its own call: inner();

It does not automatically inherit `this` from greet().

---

## 7. Arrow Functions

Arrow functions do not have their own `this`.

They inherit `this` from their surrounding lexical context.

Example:

```js
"use strict";

const user = {
  name: "Shafiqul",

  greet() {
    const inner = () => {
      console.log(this.name);
    };

    inner();
  },
};

user.greet();
```

Output: Shafiqul

greet(): this === user

inner(): Arrow function has no own `this`.

It inherits `this` from greet(): this === user

---

## 8. Normal Function vs Arrow Function

Normal function:

- Has its own `this` binding.
- `this` is determined by how it is called.

Arrow function:

- Does not have its own `this`.
- Inherits `this` from its surrounding lexical context.

---

## 9. call()

`call()` explicitly sets `this`.

Example:

```js
function greet() {
  console.log(this.name);
}

const user = {
  name: "Shafiqul",
};

greet.call(user);
```

Output: Shafiqul

this === user

---

## 10. apply()

`apply()` also explicitly sets `this`.

Example:

```js
function introduce(age) {
  console.log(this.name, age);
}

const user = {
  name: "Shafiqul",
};

introduce.apply(user, [30]);
```

---

## 11. bind()

`bind()` creates a new function with `this` bound to the provided object.

Example:

```js
function greet() {
  console.log(this.name);
}

const user = {
  name: "Shafiqul",
};

const boundGreet = greet.bind(user);

boundGreet();
```

Output: Shafiqul

---

## 12. Core Rules

Normal function:

obj.method()
→ this === obj

Regular function in strict mode:

method()
→ this === undefined

Explicit binding:

method.call(obj)
→ this === obj

method.apply(obj)
→ this === obj

method.bind(obj)
→ this is permanently bound to obj for the new function

Arrow function:

No own `this`
→ inherits `this` from surrounding lexical context

---

## 13. Scope vs `this`

Lexical scope: "Where does JavaScript look for a variable?"

`this`: "What is the `this` value for this function call?"

These are separate mechanisms.

Important:

Lexical scope is determined by where a function is defined.

For normal functions, `this` is determined by how the function is called.
