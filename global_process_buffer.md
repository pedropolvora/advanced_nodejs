# Global Object, Process and Buffer

* The global object is probably one of the most important object in Node.js. Two of it's most relevant objects are the `global.process` object and the `global.Buffer` object.

* You can define truly global variables by refering to the `global` object. Otherwise they will not be transported from a script to another even after `require(./some_script)`. 


## `process` object

The `process` object is an interface between node and its environment.
The `process` object is an instance of the event emitter. 

Interesting properties:

* `process.env`: gives you access to the environment variables. It should be accessed by means of a variable and not directly:
```javascript
const config = {
    port : process.env.PORT || 8080
}
```
* To comunicate with the enviornment you can use `process.stdin, process.stdout, process.stderr` these are streams and they cannot be closed. 

* Since `process` is an instance of `Event Emitter` we can listen to certain events:
    * `process.on('exit', callback)` is called when the event loop is empty or when a manual `process.exit()` is executed.
    * `process.on('uncaughtException', (err) => {} )` is called when an exexception is not caught and it bubbles up all the way to the EventLoop. **It's a common mistake to handle the uncaughtExceptions an prevent the process from exiting. This is pretty dangerous and should never be done**

## Buffer class

A class to work with binary streams of data. A buffer is essentially a chunk of memory allocated outside the v8 heap. We can put some date in that memory and interpreted in any of many ways. So we have to specify an encoding. 

Creating buffers:

* `Buffer.alloc()`: creates a buffer with a certain size with empty data.
* `Buffer.allocUnsafe(8)`: creates a buffer but does not clean up the data.
* `Buffer.from()` accepts different types in its data. 


To convert streams of binary data, we should use the `StringDecoder` because it handles multibyte chars much better.

