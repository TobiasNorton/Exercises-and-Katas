// Your goal in this kata is to implement a difference function, which subtracts one 
// list from another and returns the result.

// It should remove all values from list a, which are present in list b.

// array_diff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// array_diff([1,2,2,2,3],[2]) == [1,3]

function arrayDiffAgain(a, b) {
  return a.filter(number => !b.includes(number))
}

// Or just for fun:

function arrayDiff(a, b) {
  const diff = []
  a.forEach(aNumber => {
    if (!b.includes(aNumber)) {
      diff.push(aNumber)
    }
  })
  return diff
}

