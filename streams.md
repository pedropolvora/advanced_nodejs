# Streams 

A stream can be defined as a collection of data that does not necessarily fit in memory nor be fully available at one time.
Streams allow you to use piping in your node code and they might be the best/only solution to handle large blocks of data. Some scripts to make you play a bit with it:

* [A big file generator](scripts/streams/bigFileMaker.js)
* [A slow server without streaming](scripts/streams/server.js)
* [A fast server with streaming](scripts/streams/serverStream.js)
* [Writing a writeable stream](scripts/streams/writeable.js)
* [Writing a readable stream](scripts/streams/readable.js)

### Types of streams

There are different types of streams,

* **Readable**: A source from where data can be consumed, e.g. `fs.createReadStream()`
* **Writable**: A destination to where data can be written, e.g. `fs.createWriteStream()`
* **Duplex**: Streams that are readable and writeable, e.g. a `net.socket`.
* **Transform**: Can also read and write but modifies the data in the process e.g. `zlib.createGzip`

## Using streams

Note that in Node.JS **all streams are instances of EventEmitters** as such they all emit events that can be used to write or read data from them.


### Piping Streams

Besides the events associated with a stream, there is an easier way to consume data from a stream, the pipe method, `src.pipe(dest)` where both `src` and `dest` are streams. 

We if we have duplex streams, say d1 and d2, we can do the following 
```javascript
scr.pipe(d1).pipe(d2).pipe(finalDest)
// src must be a readable or duplex stream
// d1 must be a  duplex stream
// d2 must be a  duplex stream
// finalDest must be a writebale or duplex stream
```

### Stream Events, Functions and modes

**Readable Streams**

* Events: `data,end,error,close,readable`
* Functions: `pipe(),unpipe(),read(),unshift(),resume(),...`
* Modes:
    * `Paused` we have to use `stream.read()` to read from the stream
    * `Flow` data is continous flowing and we need to use `events` to consume the data. Note that in this mode we can lose data if no consumer is listening. Adding an event handler **switches the stream from paused to flowing mode**.
    * Another way to swtich between modes is using `stream.pause()` and stream.resume()` methods.


**Writeable Streams**

* Events: `drain,finish,error,close,pipe/unpipe`
* Functions: `cork(),write(),end(),uncork(),...`



