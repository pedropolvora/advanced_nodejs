

## Handling Slow I/O

We can go 
* Synchronous: easiest to go about, but horribly slow and blocking.
* `fork()`: forking into a new process it a possibility, does not scale
* Thread: we can start a new thread to handle a new request, but this can be harder to handle with shared resources.
* Event Loop: single-threaded apps use an event loop to handle slow IO.


## Event Loop

The definition: The entity that handles external events and converts them into callback invocations.

The event loop is started when node starts, and exits it when there are no more callbacks to perform. 

The movings parts of the event loop:

#### The Heap: 
Essentially the memory that stores the objects of node app.


#### The Callstack:

The v8 callstack is a list of functions, a stack is a FILO(first in last out) data structure. So the callstack is essentially a stack with functions ( callbacks) .

The functions in the callstack are put in the order they are called. So if `f1()` calls `f2()` that calls `f4()` then the stack will be: `f1(),f2(),f3()`. 

As functions start returning values, it they are removed from the stack.


The first function in the call stack is always `anonymous()`

### How callbacks work

#### The event queue

A queue is a FIFO (first in first out), the event queue is a queue that stores  events paired with functions (callbacks).

Node sends the events (which can possibly have callbacks associated with them ) to the event queue as the execution of the code finds them. 

### The event loop

It monitors both the Callstack and the Event Queue.
* When the callstack is empty:
    * Dequeues an event, *if* there is a callback associated with it, it sends it to the call stack
    * If there are no more events, the process exits.
Note that if there is a slow code running on the callstack it will block the event loop, also if we have to many events, can flood the event queue.


#### setImmediate 

* It's essentially a timer, it takes precedent with respect to other timers. **It's essentially assures execution on the next tick of the event loop**.


#### process.nextTick

This is not part of the `event loop`, it executes the function after the current operation and before the event loop continues.
