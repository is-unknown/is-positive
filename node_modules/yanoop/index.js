module.exports = {
  /**
   * Does nothing
   */
  noop: function () {
  },

  /**
   * Throws error if present.
   * @param err
   */
  throwop: function (err) {
    if (err) {
      throw err;
    }
  },

  /**
   * Performs the given function if present, with the given arguments.
   * @param fn
   * @returns {*}
   */
  doop: function (fn) {
    if ('function' === typeof fn) {
      var args = Array.prototype.slice.call(arguments, 1);
      return fn.apply(this, args);
    }
  }
};