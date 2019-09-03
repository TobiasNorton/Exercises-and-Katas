// Mash 2 arrays together so that the returning array has alternating elements of the 2 arrays.
// Both arrays will always be the same length.

// eg. [1,2,3] + ['a','b','c'] = [1, 'a', 2, 'b', 3, 'c']


const arrayMash = (array1, array2) => {
  const altArray = []
  array1.forEach((item, i) => {
    altArray.push(item)
    altArray.push(array2[i])
  })
  return altArray
}
