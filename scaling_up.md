# Scaling Up Node.JS Apps

There is only one way to scale up Node.JS applications and that is by using **multiple nodes**.
Note that Node.JS Is designed to use multiple nodes (hence the name!).

Why do scale up an application in Node? Mostly because of workload but it could also be because of availability and fault tolerance.

We can do 3 things to scale an application:

* Cloning: having each clone handling part of the application
* Decomposing: based on functionalities or responsabilities, essentially the foundation of Microservices
* Splitting: or sharding/horizontal scaling we have different instances handling different parts of the full workload based on a specific rule say by type of user or origin


## Child Processes

In Node.JS we can have different child processes that communicate between them using a messaging system. 

There are four different ways of creating a child process in Node.JS:

* [spawn()](scripts/child_processes/spawn.js): By default it does not create a shell to pass the command, so it's a bit more efficient
* [exec()](scripts/child_processes/exec.js): Does create a shell and buffers the command output and passes it to callback
* `fork()`:
* `execFile()`:
