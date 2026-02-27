# yanoop

Yet another noop utility package.

Provides utility functions: `noop`, `throwop`, and `doop`

```
npm install yanoop
require('yanoop');
```

## API

### `noop`

Does nothing.

```
function noop() {}
```

Use it if you are not sure a function is valid. Something like:

```
someFn = someFn || noop;
someFn();
```

### `throwop(err)`

Throws if `err` is defined.

```
function throwop(err) {
  if (err) {
    throw err;
  }
}
```

### `doop(fn)`

Tests `fn` and and calls it with the remaining given `arguments`.

```
function doop(fn) {
  if ('function' === typeof fn) {
    var args = Array.prototype.slice.call(arguments, 1);
    return fn.apply(this, args);
  }
}
```

Similar use case as `noop`. Something like:

```
doop(someFn, 1, 2, 3);
```
