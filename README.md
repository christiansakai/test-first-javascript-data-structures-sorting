# Test-first Data Structures and Sorting
In this workshop, we are going to be writing the JavaScript implementations of some different data structures, including Queues, Linked Lists, Hash Tables and Binary SearchTrees (in that order).

### Important Tip for Queue
Since the purpose of this exercise is to implement a Queue class, you may **not** use JavaScript's built in `push`/`pop`/`shift`/`unshift` functions, nor any other `Array.prototype` methods, nor `.length`. You can use an Object or Array to store your data and keep a head and tail pointer that moves around when functions like `enqueue` and `dequeue` are called.

### Tip for Sorting
This is an attempt to compare three sorting methods:
* JavaScript native sort
* Bubble sort
* Merge sort

To see performance comparison, run performanceTest() in your browser console

## Requirements
* NodeJS
* NPM

## Instructions
* `npm install -g testem`. Might need to do `sudo npm install -g testem`
* `cd` into one of the directory, for example `cd 01_queue`
* `touch queue.js`
* `testem queueSpec.js` and see the tests fail
* code until all tests pass
