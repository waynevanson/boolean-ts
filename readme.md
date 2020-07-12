# boolean-ts

Compile time support for runtime logic operations in Typescript

## Coming soon!

### Non-binary arguments

Currently these functions are binary (excluding `b.not(boolean)`), meaning they only take two inputs.
We'll be looking to extends these to take multiple booleans as arguments for the following functions:

- and
- nan
- or
- nor

### Pipeable

A functional programming API that supports piping is a great feature.
We'll be adding overloads to support these soon.

If a function requries 2 or more arguments, the first will be partially applied and returns a function that takes the rest.

## Installation

```js
// yarn
yarn add boolean-ts

// npm
npm install boolean-ts
```

## Example

```ts
import * as b from "boolean-ts";

const value1 = b.not(true); //type is false

const value2 = b.and(true, true); // type is true
const value3 = b.and(true, false); // type is false
const value4 = b.and(false, false); // type is false

const value4 = b.xnor(true, false); // type is true
```
