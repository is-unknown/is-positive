(function () {
  "use strict";

  var _y = require('./index.js');

  _y.noop();
  _y.throwop(null);
  _y.doop();

  try {
    _y.throwop(new Error('error'));
  } catch (e) {
    console.log('Pass: thrown');
  }

  var testFn = function (a, b, c) {
    var sum = a + b + c;
    if (sum === 9) {
      console.log('Pass: ' + sum);
    }
    else {
      console.log('Error: expected arguments invalid.')
    }
  };

  _y.doop(testFn, 2, 3, 4);
}());