# Require

It works with the following sequence of steps, **resolving > loading > wrapping > evaluating > caching**. 

```javascript
console.log(module.paths) // shows the default paths where node searches for packages
require('some-package') // the package is search in the paths above
require.resolve('some-package') // the package is resolved but not executed
```

We can load a full folder with `require('some-folder')`, it will execute either `node_modules/some-folder/index.js` (default) or the one parametrized  by the `node_modules/some-folder/packages.json` file:

```javascript
{
    "name":"some-folder",
    "start":"start.js"
}
```

### Other ways of loading 

* `require('./some-package-in-rel-path');`
* `require('/some-package-in-abs-path');`


### Circular dependency

Node allows for circular dependency, this means that:
* assume that you have `m1` and `m2`, you can load `m1` in `m2`and `m2` in `m1`.
* this can make you have incomplete loaded modules

## Loading other types of files 

When `require('some-file')` is invoked, it tries it looks for different types of files in this order:
1. `some-file.js` a standard javascript file.
1. `some-file.json` a JSON file.
1. `some-file.node` a binary node file.

### C++ addons 

The [official docs](https://nodejs.org/api/addons.html) are pretty good on explaining it, but essentially you need to have `node-gyp` installed (`npm install -g node-gyp`) and have a c++ source code file `addons.cc`,a `binding.gyp` file that has the specs on how to make and build the file, and finally run `node-gyp configure` and `node-gyp build` to be able to load the package using `require('addon.node');`.
