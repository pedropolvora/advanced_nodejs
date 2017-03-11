# How to deal with async code ? 

The classic way, is using callbacks. However, note that callbacks **are not** the same thing as async code. 

## Callbacks

A callback is a function sent as an argument. A callback can be executed in the end of an async function or sync one.


## Promises

Another way which has recently been added to node to handle async code is Promises.
However, the official way of dealing with promises is still callbacks.


## async function
The most recent async code handling is using the async functions. 

# EventEmitter

EventEmitter objects are objects that emit named events causing listeners to be called.

* The main features are **registering listener functions** and **emitting named events**.


EventEmitters allow us to have multiple reactions to a single event without having to use callbacks.
