# is-number

check if a value is number primitive

## installation
you know how to install a package. probably.

## usage
```js
const assert = require("assert-fn") // assert stuff
const isNumber = require("@is-(unknown)/is-number")

assert(isNumber(67))
assert(isNumber(NaN))
assert(isNumber(Infinity))

assert(!isNumber(new Number(42)))
assert(!isNumber("not a number"))
```
## license
Unlicense. do whatever you want