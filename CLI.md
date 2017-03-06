# Command Line Interface and REPL of Node.js 

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


### The `node`command 

* `-c` checks for syntax errors
* `node -p "process.argv.slice(1)" test 42` the command line args
