var Stack = function() {
  this._stack = {};
  this._head = 0;
  this._tail = 0;
};

Stack.prototype.push = function(element) {
  this._stack[this._tail] = element;
  this._tail++;
};

Stack.prototype.pop = function() {
  var returnElement = this._stack[this._tail - 1];
  this._tail--;
  return returnElement;
};

Stack.prototype.size = function() {
  return this._tail - this._head;
};

Stack.prototype.auditStorage = function() {
  var traverse = 0;

  for (var i = this._head; i < this._tail; i++) {
    traverse++;
  }

  return traverse;
};
