# Wrapping modules 

Before a module is compiled, node wraps it in a function. This function can be checked with `require('some-module').wrapper`:
```javascript
(function (exports, require, module, __filename, __dirname) {});
``` 
These arguments can be seen by `console.log(arguments)`.

We can know if a script is being require by another module or being run directly by checking `require.main`:

```javascript
var is_being_run_directly = require.main === module;
```

### Caching

The modules are cached when loaded with `require()`. To force a reload we have to do 
```javascript
delete require.cache['abs_path/to/the/module'];
``` 
or we can wrap the module in a function and the execute it:
```javascript
// my_module.js
module.exports = function(){
console.log('hello')};
```
```javascript
// index.js
require('./my_module')();
require('./my_module')();
```

