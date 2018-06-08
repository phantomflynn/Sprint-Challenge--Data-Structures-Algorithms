/* 
RECURSION
  * follows the rule of Last In, First Out (LIFO)
  * each recursive call adds a new "frame" to the callstack
*/

class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  depthFirstForEach(cb) {
    // `this` is equal to the current constructor

    /* Basic Recursion Strategy */
    cb(this.value);
    if (this.left) this.left.depthFirstForEach(cb);
    if (this.right) this.right.depthFirstForEach(cb);
  

    /* 
    Iterative Strategy

    const stack = [];
    stack.push(this);

    while (stack.length) {
      const currentNode = stack.pop(); // most recent node added to stack

      // left-to-right order - right node needs to be pushed to the stack first
      if (currentNode.right) stack.push(currentNode.right);
      if (currentNode.left) stack.push(currentNode.left);
      cb(currentNode.value);
    }
    */

  }

  breadthFirstForEach(cb) {
    const queue = [this];

    while (queue.length) {
      const currentNode = queue.shift();

      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);

      cb(currentNode.value);
    }
    
    /* Recursive Strategy

    const queue = [this];

    const recurse = () => {
      if (queue.length === 0) return;

      const node = queue.shift();
      cb(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);

      return recurse();
    }

    return recurse();
    */
    
  }

  insert(value) {
    if (value < this.value) {
      if (!this.left) this.left = new BinarySearchTree(value);
      else this.left.insert(value);
    } 
    
    else {
      if (!this.right) this.right = new BinarySearchTree(value);
      else this.right.insert(value);
    }
  }

  contains(target) {
    if (this.value === target) return true;

    if (this.left && this.left.contains(target)) return true;
    if (this.right && this.right.contains(target)) return true;

    return false;
  }

  getMax() {
    if (!this) return null;    

    let max = this.value;
    let current = this;

    while (current) {
      if (current.value > max) {
        max = current.value;
      }
      current = current.right;
    }

    return max;
  }
}

module.exports = BinarySearchTree;