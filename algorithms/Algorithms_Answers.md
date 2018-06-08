**1-a.** `O(n^3 / n^2)`

**1-b.** `O(log(n))`

**1-c.** `O(n^3 log(n))`

**1-d.** `O(n log(n))`

**1-e.** `O(n^4)`

**1-f.** `O(n)`

**1-g.** `O(n)`

#

**2-a.** Given an array of numbers, design a linear running time algorithm to find the maximum value of a[j] - a[i], where j ≥ i.

```
  const linearMaxValue = arr => {
    let maxValue = arr[1] - arr[0];

    for (i = 0; i < arr.length; i++) {
      for (j = i+1; j < arr.length; j++) {
        const difference = arr[j] - arr[i];
        if (difference > maxValue) maxValue = difference;
      }
    }

    return maxValue;
  }
```

**2-b.** Suppose that you have an _n_-story building and plenty of eggs. Suppose also that an egg is broken if it is thrown off floor _f_ or higher, and unbroken otherwise. Devise a strategy to determine the value off such that the number of dropped eggs is minimized.

```
  const brokenEggs = (n_stories, f_threshold) => {

  }
```