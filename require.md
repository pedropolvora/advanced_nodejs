# Require

It works with the following sequence of steps, **resolving > loading > wrapping > evaluating > caching **. 

```javascript
console.log(module.paths) // shows the default paths where node searches for packages
require('some-package') // the package is search in the paths above
requre.resolve('some-package') // the package is resolved but not executed
```

We can load a full folder with `require('some-folder')`, it will execute either `node_modules/some-folder/index.js` (default) or the one parametrized  by the `node_modules/some-folder/packages.json` file:

```javascript
{
    "name":"some-folder",
    "start":"start.js}
```

### Other ways of loading 

* `require('./some-package-in-rel-path');`
* `require('/some-package-in-abs-path');`


### Circular dependency

Node allows for circular dependency, this means that:
* assume that you have `m1` and `m2`, you can load `m1` in `m2`and `m2` in `m1`.
* this can make you have incomplete loaded modules

