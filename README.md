# Node.JS Notes

### Topics covered

* [CLI](#cli-and-repl)
* [Sources](#sources)


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


## Sources
### Advanced Node Course 
Most of these notes  and scripts come from the [Advanced Node Plurasight Advanced Course](https://app.pluralsight.com/library/courses/nodejs-advanced/table-of-contents)

More resources can be found in [Course's repo](https://github.com/jscomplete/advanced-nodejs)

### Setting-up 

* Run `nvm use` to run the existing `.nvmrvc` file.
