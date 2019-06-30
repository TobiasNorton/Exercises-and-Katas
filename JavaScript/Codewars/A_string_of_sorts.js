// Define a method that accepts 2 strings as parameters. The method returns the first string sorted by the second.

// sortString("foos", "of")       => "oofs"

// sortString("string", "gnirts") => "gnirts"

// sortString("banana", "abn")    => "aaabnn"
// To elaborate, the second string defines the ordering. It is possible that in the second string characters repeat, 
// so you should remove repeating characters, leaving only the first occurrence.

// Any character in the first string that does not appear in the second string should be sorted to the end of the 
// result in original order.


const sortString = (string, order) => {
  const toSort = []
  const unused = []
  const trueOrder = []
  const sorted = []
  string.split('').forEach(i => {
    if (order.includes(i)) {
      toSort.push(i)
    } else {
      unused.push(i)
    }
  })
  order.split('').forEach(i => {
    if (!trueOrder.includes(i)) {
      trueOrder.push(i)
    }
  })
  trueOrder.forEach(i => {
    string.split('').forEach(j => {
      if (i === j) {
        sorted.push(j)
      }
    })
  })
  return sorted.join('') + unused.join('')
}
