**1-a.** `O(n^3 / n^2)` === `O(n)`
  * `n^3` growth of the `while` loop
  * `n^2` iterations within each loop

**1-b.** `O(log(n))`
  * remaining iterations are being cut in half after each loop

**1-c.** `O(sqrt(n))`
  * the nested loops are constant
    * `8` is the constant

**1-d.** `O(n log(n))`
  * outer loop is `log(n)`
  * inner loop is `n`

**1-e.** `O(n^3)`
  * last loop is constant

**1-f.** `O(n)`

**1-g.** `O(n)`

#

**2-a.** Given an array of _n_ numbers, design a linear running time algorithm to find the maximum value of `a[j] - a[i]`, where _j ≥ i_.

```
  const linearMaxValue = arr => {
    let min = arr[0];
    let maxDiff = 0;

    arr.forEach(value => {
      min = Math.min(min, value);
      maxDiff = Math.max(maxDiff, value - min);
    });

    return maxDiff;
  }
```

**2-b.** Suppose that you have an _n_-story building and plenty of eggs. Suppose also that an egg is broken if it is thrown off floor _f_ or higher, and unbroken otherwise. Devise a strategy to determine the value off such that the number of dropped eggs is minimized.
  * use binary search to find the correct floor (where the eggs wont break)
  * binary search complexity is `O(log(n))`
```
  const brokenEggs = (n_stories, f_threshold) => {

  }
```

#

**3.**
```
const quicksort = arr => {
  if (arr.length <= 1) return arr;

  // select and remove a pivot element from the array
  // create empty lists less and greater

  arr.forEach(value => {
    if (value <= pivot) // then append value to less
    else // append value to greater
  })

  return [quicksort(less), list(pivot), quicksort(greater)];
}
```

**a)** Suppose we implement quicksort so that the pivot is always chosen to be the first element of the array. What is the running time of this algorithm on an input array that is already sorted?  Why?
  * `O(n^2)`

**b)** Suppose we implement quicksort so that the pivot is always magically chosen to be the median element of the array.  What is the running time of this algorithm?  Why?
  * best case runtime of `O(log(n))`