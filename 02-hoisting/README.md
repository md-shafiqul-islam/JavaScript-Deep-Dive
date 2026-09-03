# Hoisting & Temporal Dead Zone

## Objective

Understand how JavaScript prepares variable and function bindings
before executing code.

## Topics Covered

- Hoisting
- Declaration
- Initialization
- Assignment
- `var` behavior
- `let` behavior
- `const` behavior
- Temporal Dead Zone (TDZ)
- Function declaration hoisting
- Function expression behavior

## Key Differences

| Declaration Type     | Before Declaration          |
| -------------------- | --------------------------- |
| `var`                | Accessible with `undefined` |
| `let`                | ReferenceError (TDZ)        |
| `const`              | ReferenceError (TDZ)        |
| Function declaration | Function available          |

## Files

- `examples.js` — Code experiments
- `exercises.js` — Practice problems
- `notes.md` — Personal learning notes
