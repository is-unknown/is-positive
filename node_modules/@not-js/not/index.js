const uncurry = require("uncurry-x")
const $apply = require("function.apply-x")
const apply = uncurry($apply)
const not = (x) =>
  require("yanoop").doop(require("not")(require("literally")(x)))

function notjs(f) {
  return function negation() {
    return not(apply(f, this, arguments))
  }
}

module.exports = notjs
