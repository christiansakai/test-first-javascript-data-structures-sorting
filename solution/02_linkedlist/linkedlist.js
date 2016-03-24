var LinkedList = function() {
  this.head;
  this.tail;
  this.Node = function(value) {
    this.prev = null;
    this.value = value;
    this.next = null;
  };
};

LinkedList.prototype.addToHead = function(value) {
  var newNode = new this.Node(value);

  if (typeof this.head == 'undefined' && typeof this.tail == 'undefined') {
    this.head = newNode;
    this.tail = newNode;
  } else {
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
  }
};
LinkedList.prototype.removeHead = function() {
  if (typeof this.tail == 'undefined' && typeof this.head == 'undefined') return; // In case no node is present
  var returnHead = this.head;

  if (this.head.prev === null && this.head.next === null) { // In case only one node in list
    this.head = undefined;
    this.tail = undefined;
  } else {
    this.head = this.head.next;
    this.head.prev = null;
  }

  return returnHead.value;
};
LinkedList.prototype.addToTail = function(value) {
  var newNode = new this.Node(value);

  if (typeof this.head == 'undefined' && typeof this.tail == 'undefined') {
    this.head = newNode;
    this.tail = newNode;
  } else {
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
  }
};
LinkedList.prototype.removeTail = function() {
  if (typeof this.tail == 'undefined' && typeof this.head == 'undefined') return; // In case no node is present
  var returnTail = this.tail;

  if (this.tail.prev === null && this.tail.next === null) { // In case only one node in list
    this.head = undefined;
    this.tail = undefined;
  } else {
    this.tail = this.tail.prev;
    this.tail.next = null;
  }

  return returnTail.value;
};
LinkedList.prototype.search = function(value) {
  var nodeToSearch = this.head;

  while (nodeToSearch.next !== null) {
    if (nodeToSearch.value === value) { return true; }
    else { nodeToSearch = nodeToSearch.next; }
  }

  return false;
};
