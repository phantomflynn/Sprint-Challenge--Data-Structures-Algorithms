/* 
  bubbleUp and siftDown are worst case O(n)
*/

const heapsort = (arr) => {  
  const heap = new Heap();
  const sorted = Array(arr.length); // O(n)

  for (i = 0; i < arr.length; i++) {
    heap.insert(arr[i]);
  } // O(n)

  for (i = arr.length - 1; i > -1; i--) {
    sorted[i] = heap.delete();
  }

  return sorted;
  
  /*
  let result = [];

  const heap = new Heap();
  arr.forEach(item => heap.insert(item));
  
  while (heap.storage.length > 0) {
    let root = heap.storage[0]
    let last = heap.storage[heap.storage.length - 1];

    result.push(root);

    [root, last] = [last, root];
    heap.delete();
    heap.siftDown(0);
  }

  return result.reverse();
  */
  
};


class Heap {
  constructor() {
    this.storage = [];
  }

  insert(val) {
    const index = this.storage.push(val) - 1;
    this.bubbleUp(index);
  }

  delete() {
    if (!this.storage.length) return null;
    if (this.storage.length === 1) {
      return this.storage.pop();
    }

    const max = this.storage[0];
    this.storage[0] = this.storage.pop();
    this.siftDown(0);
    return max;
  }

  getMax() {
    return this.storage[0];
  }

  getSize() {
    return this.storage.length;
  }

  bubbleUp(index) {
    const parent = Math.floor((index - 1) / 2);
    if (this.storage[parent] < this.storage[index]) {
      [this.storage[parent], this.storage[index]] = [this.storage[index], this.storage[parent]];
      this.bubbleUp(parent);
    }
  }

  siftDown(index) {
    const leftChildIndex = index * 2 + 1;
    const rightChildIndex = index * 2 + 2;
    let maxChild;
    
    if (this.storage[leftChildIndex] && this.storage[rightChildIndex]) {
      maxChild = this.storage[leftChildIndex] > this.storage[rightChildIndex] ? leftChildIndex : rightChildIndex;
    } else if (this.storage[leftChildIndex]) {
      maxChild = leftChildIndex;
    } else if (this.storage[rightChildIndex]) {
      maxChild = rightChildIndex;
    } 

    if (this.storage[index] < this.storage[maxChild]) {
      [this.storage[maxChild], this.storage[index]] = [this.storage[index], this.storage[maxChild]];
      this.siftDown(maxChild);
    }
  }
}

module.exports = {
  Heap,
  heapsort,
};
