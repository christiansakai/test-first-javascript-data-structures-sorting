// Node Class
var Node = function(value) {
  this.previous = null;
  this.value = value;
  this.next = null;
};

// LinkedList Class
var LinkedList = function() {
  this.head;
  this.tail;
};

LinkedList.prototype.addToHead = function(value) {
  var newNode = new Node(value);

  if (typeof this.head == 'undefined' &&
      typeof this.tail == 'undefined') {
    this.head = newNode;
    this.tail = newNode;
  } else {
    newNode.next = this.head;
    this.head.previous = newNode;
    this.head = newNode;
  }
};

LinkedList.prototype.removeHead = function() {
  // In case no node is present
  if (typeof this.tail == 'undefined' &&
      typeof this.head == 'undefined') {
    return;
  }

  var returnHead = this.head;

  // In case only one node in the list
  if (this.head.previous === null &&
      this.head.next === null) {
    this.head = undefined;
    this.tail = undefined;
  } else {
    this.head = this.head.next;
    this.head.previous = null;
  }

  return returnHead.value;
};

LinkedList.prototype.addToTail = function(value) {
  var newNode = new Node(value);

  if (typeof this.head == 'undefined' &&
      typeof this.tail == 'undefined') {
    this.head = newNode;
    this.tail = newNode;
  } else {
    newNode.previous = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
  }
};

LinkedList.prototype.removeTail = function() {
  // In case no node is present
  if (typeof this.tail == 'undefined' &&
      typeof this.head == 'undefined') {
    return;
  }

  var returnTail = this.tail;

  // In case only one node in the list
  if (this.tail.previous === null &&
      this.tail.next === null) {
    this.head = undefined;
    this.tail = undefined;
  } else {
    this.tail = this.tail.previous;
    this.tail.next = null;
  }
  
  return returnTail.value;
};

LinkedList.prototype.search = function(input) {
  var nodeToSearch = this.head;

  // Not sure if this is the correct solution
  // PR please :)
  while (nodeToSearch.next !== null) {
    if (typeof input == 'function') {
      if (input(nodeToSearch.value)) {
        return nodeToSearch.value;
      }
    } 

    if (nodeToSearch.value === input ||
        nodeToSearch.value.name === input) {
      return nodeToSearch.value;
    } 

    nodeToSearch = nodeToSearch.next;
  }

  // Off by 1 error
  if (typeof input == 'function') {
    if (input(nodeToSearch.value)) {
      return nodeToSearch.value;
    }
  } 

  if (nodeToSearch.value === input ||
      nodeToSearch.value.name === input) {
    return nodeToSearch.value;
  }

  return null;
};

