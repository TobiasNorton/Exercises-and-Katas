// Write a function that flattens an Array of Array objects into a flat Array. 
// Your function must only do one level of flattening.

// flatten([1,2,3]) // => [1,2,3]
// flatten([[1,2,3],["a","b","c"],[1,2,3]])  // => [1,2,3,"a","b","c",1,2,3]
// flatten([[[1,2,3]]]) // => [[1,2,3]]


const flatten = (array) => {
  if (!array.length) {
    return array
  }
  const flattenedArray = []
  array.forEach(arr => {
    if (typeof arr === 'number') {
      flattenedArray.push(arr)
    } else {
      arr.forEach(i => {
      flattenedArray.push(i)
    })
    }
  })
  return flattenedArray
}

// Or:

const flattenArray = array => {
  return array.reduce((a, b) => {
    return a.concat(b)
  }, [])
}

// Or:

const flattenArrayAgain = array => {
  return [].concat(...array)
}

