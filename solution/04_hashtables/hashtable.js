// Not sure if the implementation is correct
// PR please :)
var HashTable = function() {
  this.numBuckets = 25;
  this._storage = [];
};

HashTable.prototype.set = function(key, value) {
  if (typeof key != 'string') {
    throw new TypeError('Keys must be strings');
  }

  var index = this.hash(key) + this.hash(key[0]);
  this._storage[index] = value;
};

HashTable.prototype.get = function(key) {
  var index = this.hash(key) + this.hash(key[0]);
  return this._storage[index];
};

HashTable.prototype.hasKey = function(key) {
  var index = this.hash(key) + this.hash(key[0]);

  return typeof this._storage[index] == 'undefined' ? false : true;
};

HashTable.prototype.hash = function(value) {
  var sum = value.split('').reduce(function(prev, next, i) {
    var charCode = value.charCodeAt(i);
    return charCode + prev;
  }, 0);

  return sum % this.numBuckets;
};
