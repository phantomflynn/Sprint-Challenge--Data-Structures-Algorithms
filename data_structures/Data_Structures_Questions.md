Add your answers to the questions below.

1. What is the runtime complexity of your `depthFirstForEach` method?
    * **`O(n)`** because we are traversing the entire tree
    * as new nodes get added to the tree, the number of additional calls increases lineraly

2. What is the space complexity of your `depthFirstForEach` function? 
    * **`O(n)`** regardless of whether it was implemented iteratively or recursively 

3. What is the runtime complexity of your `breadthFirstForEach` method? ~ 
    * **`O(n)`** - same logic as `depthFirst`

4. What is the space complexity of your `breadthFirstForEach` method? ~ 
    * **`O(n)`** because every node gets added to a queue data structure
    * in the worst case, we might have a bunch of nodes in the queue

5. What is the runtime complexity of your `heapsort` function? ~ 
    * **`O(n log(n))`** because we have two loops, each invoking `O(log(n))` functions

6. What is the space complexity of the `heapsort` function? Recall that your implementation should return a new array with the sorted data. What would be the space complexity if your function instead altered the input array? ~ 
    * **`O(n)`** space complexity
    * **`O(1)`** if we only altered the input array
