# Node.JS Notes

### Topics covered

* [CLI](#cli-and-repl)
* [NPM and Semver](#npm)
* [Sources and links](#sources)

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


## Sources
### Advanced Node Course 
Most of these notes  and scripts come from the [Advanced Node Plurasight Advanced Course](https://app.pluralsight.com/library/courses/nodejs-advanced/table-of-contents)

More resources can be found in [Course's repo](https://github.com/jscomplete/advanced-nodejs)

### Setting-up 

* Run `nvm use` to run the existing `.nvmrvc` file.
