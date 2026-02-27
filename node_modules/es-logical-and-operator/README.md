# es-logical-and-operator
Implementation of the `&&` operator as a function (`&& in fp`).

## Installation
```bash
npm install es-logical-and-operator
```
or
```bash
yarn add es-logical-and-operator
```

## Usage
```js
const and = require("es-logical-and-operator")
console.log(and(true, false)) // false
console.log(and(false, true)) // false
console.log(and(false, false)) // false
console.log(and(true, true)) // true
console.log(and(1, 2)) // 2
console.log(and(0, 1)) // 0
```

## License
[EGPSL10X-1.0](https://github.com/10xEngineersQualityProgramming/EGPSL10X-1.0) Licensed