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

## Theory

Based off information from [this website on basic logic gates](http://www.ee.surrey.ac.uk/Projects/CAL/digital-logic/gatesfunc/index.html#logicgates), we'll document some useful concepts here.

### Truth Tables

A truth table is a table that visually demonstrate how the logic gate should work. We'll focus on binary functions.
There is a truth table for each operation: `and`, `or`, `nand`, `nor`, `xor`, `xnor`.

### And

Outputs true when all inputs are true.

| A   | B   | Result |
| --- | --- | ------ |
| 0   | 0   | 0      |
| 0   | 1   | 0      |
| 1   | 0   | 0      |
| 1   | 1   | 1      |

### Or

Outputs true when any input is true.

|  A  |  B  | Result |
| :-: | :-: | :----- |
|  0  |  0  | 0      |
|  0  |  1  | 1      |
|  1  |  0  | 1      |
|  1  |  1  | 1      |

#### Nand

Opposite of `And`. Ouputs true when both outputs are not true.

|  A  |  B  | Result |
| :-: | :-: | :----- |
|  0  |  0  | 1      |
|  0  |  1  | 1      |
|  1  |  0  | 1      |
|  1  |  1  | 0      |

#### Nor

Opposite of `Or`. Outputs true when both inputs are false

|  A  |  B  | Result |
| :-: | :-: | :----- |
|  0  |  0  | 1      |
|  0  |  1  | 0      |
|  1  |  0  | 0      |
|  1  |  1  | 0      |

#### Xor

Ouputs true when inputs are mismatched true/false.

|  A  |  B  | Result |
| :-: | :-: | :----- |
|  0  |  0  | 0      |
|  0  |  1  | 1      |
|  1  |  0  | 1      |
|  1  |  1  | 0      |

#### Xnor

Ouputs true when both inputs are true or both inputs are false.

|  A  |  B  | Result |
| :-: | :-: | :----- |
|  0  |  0  | 1      |
|  0  |  1  | 0      |
|  1  |  0  | 0      |
|  1  |  1  | 1      |
