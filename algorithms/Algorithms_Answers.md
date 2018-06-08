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

  * start at `f' = n/2`
  * if the egg breaks, set `f' = f'/2`
  * if the egg does not break, set `f' = 3f'/2`

  * `binary sectioning` is the best method for going from an aproximate value to an exact value
  * "i have no idea what the first floor is that will break the egg, so let's just choose the middle floor!"
  * if the egg breaks, you can check the floor below, or you could take the halfway point again, which is 1/4 of the way up the building
  * thinking about looking up a word in the dictionary...
    * if you know what you're looking for, and you open to a page that isn't the right one, you wouldn't just turn the next page...you would skip a chunk of the book!
    * if you end up overshooting, you can skip back in smaller amounts

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