# es-logical-not-operator

Tired of writing something like this this?:

```js
const $ = require("yanoop").doop
const not = require("@not-js/not")
const literally = require("literally")

$(not(literally(false))) // true
```

Well now you can do this instead:

```js
const not = require("es-logical-not-operator")

not(false) // true
```

[EGPSL10X-1.0](https://github.com/10xEngineersQualityProgramming/EGPSL10X-1.0) licensed