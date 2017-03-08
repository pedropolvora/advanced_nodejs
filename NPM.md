# NPM

You can install directly from github


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



