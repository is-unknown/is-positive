var and = require("es-logical-and-operator"),
not = require("es-logical-not-operator"),
isNotPositive = require("is-not-positive"),
isNumber = require("@is-(unknown)/is-number")

module.exports = function isPositiveNumberPrimitive(x) {
  return and(
    isNumber(x),
    not(isNotPositive(x))
  )
}