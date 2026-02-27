const $ = require("yanoop").doop
const not = require("@not-js/not")
const literally = require("literally")

module.exports = function logicalNot(x) {
  return $(not(literally(x)))
}