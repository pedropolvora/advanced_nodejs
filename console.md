# Node's Console

The console object was created in Node.JS to match the console existing in the browsers.
There is a class `console.Console` which can be used to write to any stream, and there is 
the global object `console` that writes to `stdout` and `stderror`.

To create a console to write to any other stream like a file or a socket, we can do:

```javascript
const fs = require('fs');

const out = fs.createWriteStream('./outfile.log');
const err = fs.createWriteStream('./errfile.log');
const logger = new logger.Console(out, err);


logger.log('some log message');
logger.error('some error message');
```

## Using `console`

```javascript
var some_object = {
    p1 : {
        sp1: 1,
        sp2: 2
    }
}
console.log('some jason %j in it', some_object);
console.log('some %s with some number: %n', 'string', 99);


// This will print the object using the util.inspect 
// method. This method takes in several options.
// But to use it we must revert to console.dir: 
console.log(some_object);
console.log(some_object, {depth:0}); // shows only the first level of the object
```

* `console.trace()`: gives you the call stack at the point where it is envoked.
* `console.time(), console.timeEnd()`: allows you to time between executions of these consoles.
```javascript
console.time("label1");
someCode();
console.timeEnd("label1");
```
## Debug Logging
We can use the `util.debuglog` function to create a logger that will only work with a given 
debug enviornment variable:
```javascript
const util = require('util');
const debuglog = util.debuglog('server');

debuglog("this message will only pring if node is called with the env var NODE_DEBUG='server'");
```
