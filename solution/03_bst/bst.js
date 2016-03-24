var BinarySearchTree = function(value) {
  this.left;
  this.value = value;
  this.right;
};

BinarySearchTree.prototype.insert = function(value) {
  var newNode = new BinarySearchTree(value);

  if (value < this.value) {
    if (typeof this.left == 'undefined') { this.left = newNode; }
    else { this.left.insert(value); }
  } else {
    if (typeof this.right == 'undefined') { this.right = newNode; }
    else { this.right.insert(value); }
  }
};
BinarySearchTree.prototype.contains = function(value) {
  this.traverseAndCollect();
  if (this.__valuesArr.indexOf(value) >= 0) { return true; }
  return false;
};
BinarySearchTree.prototype.size = function() {
  return this.traverseAndCollect().length;
};
BinarySearchTree.prototype.traverseAndCollect = function() { // A helper function
  this.__valuesArr = [];
  this.__valuesArr.push(this.value) // Push this level's value to the array, base case

  if (typeof this.left != 'undefined') {
    this.__valuesArr = this.__valuesArr.concat(this.left.traverseAndCollect());
  }

  if (typeof this.right != 'undefined') {
    this.__valuesArr = this.__valuesArr.concat(this.right.traverseAndCollect());
  }

  return this.__valuesArr;
};
BinarySearchTree.prototype.depthFirstMap = function(func) {
  func(this.value); // The base case, to push this level's value to depth array

  if (typeof this.left != 'undefined') { this.left.depthFirstMap(func); }
  if (typeof this.right != 'undefined') { this.right.depthFirstMap(func); }
};
BinarySearchTree.prototype.breadthFirstMap = function(func) {
  var queue = [this]; // Base case, root node pushed into an array
  var iterate = function(arr, func) {
    var temp = [];

    for (var i = 0, l = arr.length; i < l; i++) {
      func(arr[i].value);

      if (typeof arr[i].left != 'undefined') { temp.push(arr[i].left); }
      if (typeof arr[i].right != 'undefined') { temp.push(arr[i].right); }
    }

    if (temp.length !== 0) { iterate(temp, func); } // Base case, iterate until temp doesn't have element anymore.
  };

  iterate(queue, func);
};








