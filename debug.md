## Node's Debugger 

To debug an node script run ` node debug script.js `. 
You can type `help` to see some of the commands, such as `run(r) continue(c) setBreakPoint(sb)`.

The basic flow on the debugger is:

1. Set a breakpoint on a given line with `sb(lineNumber)`
1. Continue execution up to that line with  `cont`
1. Get into the REPL mode with `repl` and inspect the code
1. Press `Ctrl+C` to exit 
1. Put a watcher with `watch('varname')` so that everytime you break execution the debugger pritns out those values.
1. `list(x)` shows you the present line with context of `x` lines

