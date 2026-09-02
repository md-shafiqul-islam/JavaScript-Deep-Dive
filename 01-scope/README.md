# Scope

## Objective

Understand how JavaScript determines where variables can be
accessed and how variable lookup works through the scope chain.

## Topics Covered

- Global scope
- Function scope
- Block scope
- Lexical scope
- Scope chain
- Variable shadowing
- `let`
- `const`
- `var`

## Key Mental Model

When JavaScript needs a variable, it searches the current lexical
environment first.

If the variable is not found, JavaScript searches the outer lexical
environment.

This continues until the variable is found or the global environment
is reached.

## Examples

See:

- `examples.js`

## Practice

See:

- `exercises.js`

## Notes

See:

- `notes.md`
