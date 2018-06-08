class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  depthFirstForEach(cb) {

    const recurse = node => {
      cb(node.value);
      if (node.left) recurse(node.left);
      if (node.right) recurse(node.right);
    }
    
    // `this` is equal to the constructor
    // in this case, the constructor represents the root
    // value: 5, left: { ... value: 2 ... }, right: { ... value: 7 ... }
    return recurse(this);

  }

  breadthFirstForEach(cb) {
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
    
    // while (queue.length > 0) {
    //   const node = queue.shift();

    //   cb(node.value);
      
    //   if (node.left) queue.push(node.left);
    //   if (node.right) queue.push(node.right);
    // }
    
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