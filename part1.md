# Node.JS Notes

Here you can find assorted commands and details on different aspects of node.
Some topics have small explanations, but many are just cheatsheets.

### Topics covered

**Part I**
* [CLI](#cli-and-repl)
* [NPM and Semver](#npm)
* [Node's Console](#the-console)



## CLI and REPL
Some tips about the command Line interface and Read-Eval-Print Loop (REPL) of Node.js:

* `tab` autocomplete 
* `global.` gives you all the top level functions and modules available in node.
* `_` the last evaluated the value 
* `.` special commands see them with `. \tab`. Examples:
    * `.save` save a session 
    * `.load` load a file
    * `.editor` opens an editor , `<C-D>` to exit 
* the built-in `repl` module, useful to create specific sessions
    * you can load stuff by default with like this:
```javascript
const repl = require('repl');

let r = repl.start();

r.context.loadash = require('lodash');
``` 


#### The `node`command 

* `-c` checks for syntax errors
* `node -p "process.argv.slice(1)" test 42` the command line args

## NPM

NPM is the Node.JS package manager.
You can install not only from NPM's repository but also  directly from github.

#### Installing packages

```javascript
npm i user/path#version
```

```javascript
npm i dry-run // do not install just see what would be installed 
npm ls -g --depth=0 // show only the first level of the tree of installed packages
npm ls -g --json // show the output in json
```

```javascript
npm i -S //(--save) install as a production dependency 
npm i -D //(--dev) install as a development dependency 
npm i -O //(--optional) install as an optional dependency 
// optional dependencies the code is should only be executed if the dependency is installed
```

#### Semantic Versioning
```javascript 
{
    "semver1": "1.2.3" // installs the exact version
    "semver1": "=1.2.3" // installs the exact version
    "semver1": "1.x.3" // installs the most recent one for that position
    "semver1": "1.*.3" // installs the most recent one for that position
    "semver1": "~1.2.3" // installs at least 1.2.3 and varies only the last level
    "semver1": "^1.2.3" // installs at least 1.2.3 and varies the last two levels
}
```

#### Configuration


```javascript
npm config set some-var  "some-value"
npm config list -l 
npm config delete some-var
npm config set save true // npm install will always use the --save flag
npm search some_stuff // searches for packages with names containing some_stuff
```


```javascript 
npm shrinkwrap // locksdown dependencies 
npm home package // opens the homepage
npm repo package // opens the repo
npm prune // removes stuff not --save ath packages.json
``` 


#### Bonus

```javascript
npm visnup
npm xmas
```

## The Console

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

