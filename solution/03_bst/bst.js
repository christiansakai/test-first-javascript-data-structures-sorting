var BinarySearchTree = function(value) {
  this.left;
  this.value = value;
  this.right;
};

BinarySearchTree.prototype.insert = function(value) {
  var newNode = new BinarySearchTree(value);

  if (value < this.value) {
    if (typeof this.left == 'undefined') { 
      this.left = newNode; 
    } else { 
      this.left.insert(value); 
    }
  } else {
    if (typeof this.right == 'undefined') { 
      this.right = newNode; 
    } else { 
      this.right.insert(value); 
    }
  }
};

// A helper function
BinarySearchTree.prototype.traverseAndCollect = function() { 
  this.__valuesArr = [];

  // Base case
  // Push this level's value to the array
  this.__valuesArr.push(this.value);

  if (typeof this.left != 'undefined') {
    this.__valuesArr = this.__valuesArr.concat(this.left.traverseAndCollect());
  }

  if (typeof this.right != 'undefined') {
    this.__valuesArr = this.__valuesArr.concat(this.right.traverseAndCollect());
  }

  return this.__valuesArr;
};

BinarySearchTree.prototype.contains = function(value) {
  this.traverseAndCollect();

  if (this.__valuesArr.indexOf(value) >= 0)
    return true;

  return false;
};

BinarySearchTree.prototype.size = function() {
  return this.traverseAndCollect().length;
};

BinarySearchTree.prototype._depthFirstForEachPreOrder = function(func) {
  // Base case
  // Push this level's value to depth array
  func(this.value); 

  if (typeof this.left != 'undefined') { 
    this.left._depthFirstForEachPreOrder(func); 
  }

  if (typeof this.right != 'undefined') { 
    this.right._depthFirstForEachPreOrder(func); 
  }
};

BinarySearchTree.prototype._depthFirstForEachPostOrder = function(func) {
  if (typeof this.left != 'undefined') { 
    this.left._depthFirstForEachPostOrder(func); 
  }

  if (typeof this.right != 'undefined') { 
    this.right._depthFirstForEachPostOrder(func); 
  }

  // Base case
  // Push this level's value to depth array
  func(this.value);
};

BinarySearchTree.prototype._depthFirstForEachInOrder = function(func) {
  if (typeof this.left != 'undefined') {
    this.left._depthFirstForEachInOrder(func);
  }

  func(this.value);

  if (typeof this.right != 'undefined') {
    this.right._depthFirstForEachInOrder(func);
  }
};

BinarySearchTree.prototype.depthFirstForEach = function(func, type) {
  switch (type) {
    case 'pre-order':
      this._depthFirstForEachPreOrder(func);
      break;
    
    case 'post-order':
      this._depthFirstForEachPostOrder(func);
      break;

    default:
      this._depthFirstForEachInOrder(func);
  }
};

BinarySearchTree.prototype.breadthFirstForEach = function(func) {
  // Base case
  // Root node pushed into an array
  var queue = [this];   

  var iterate = function(arr, func) {
    var temp = [];

    for (var i = 0, l = arr.length; i < l; i++) {
      func(arr[i].value);

      if (typeof arr[i].left != 'undefined') { 
        temp.push(arr[i].left); 
      }

      if (typeof arr[i].right != 'undefined') { 
        temp.push(arr[i].right); 
      }
    }

    // Base case
    // Iterate until temp does not have an element anymore
    if (temp.length !== 0) { 
      iterate(temp, func); 
    } 
  };

  iterate(queue, func);
};
