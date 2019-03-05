// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element 
// is sum of negative numbers.

// If the input array is empty or null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].



const countPositivesSumNegatives = (input) => {
  if (!input || input.length === 0) {
    return []
  }
    let positiveCount = 0
    let negativeSum = 0
    input.forEach(number => {
      if (number > 0) {
        positiveCount++
      } else {
        negativeSum += number
      }
    }) 
  return [positiveCount, negativeSum]
}
