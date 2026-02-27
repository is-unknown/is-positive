const isNumber2 = require("is-actual-number")
const trueValue = require("true-value")
const falseValue = require("false-value")

module.exports = function isNumber(x) {
  return isNumber2(x, {
    allowInfinite: trueValue(),
    allowNumberStrings: falseValue()
  })
}