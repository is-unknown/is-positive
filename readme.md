# is-positive
Check if a given value is a positive number primitive.

## installation
```bash
npm install @is-(unknown)/is-positive
```

## Usage
```js
const isPositive = require("@is-(unknown)/is-positive")

console.log(isPositive(3)) // true
console.log(isPositive(0)) // false
console.log(isPositive(-5)) // false
console.log(isPositive(Object(3))) // false
console.log(isPositive("not a number")) // false
```