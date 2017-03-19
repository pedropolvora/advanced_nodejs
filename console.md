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
console.log('some %s with some number: %n', 'string', 99);
var some_object = {
    p1 : {
        sp1: 1,
        sp2: 2
    }
}
console.log('some jason %j in it', some_object);
// this will print the object using the util.inspect 
// method. This method takes in several options.
// But to use it we must revert to console.dir
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
