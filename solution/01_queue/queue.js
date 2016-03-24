var Queue = function() {
  this._queue = {};
  this._head = 0;
  this._tail = 0;
};

Queue.prototype.enqueue = function(element) {
  this._queue[this._tail] = element;
  this._tail++;
};

Queue.prototype.dequeue = function() {
  if (this.size() === 0) return;

  var returnElement = this._queue[this._head];
  this._head++;

  return returnElement;
};

Queue.prototype.size = function() {
  return this._tail - this._head;
};

Queue.prototype.countByTraversing = function() {
  var traverse = 0;
  var i;

  for (i = this._head; i < this._tail; i++) {
    traverse++;
  }

  return traverse;
};
