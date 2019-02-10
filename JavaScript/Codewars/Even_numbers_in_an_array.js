// Given an array of digitals numbers, return a new array of length number containing the last 
// even numbers from the original array (in the same order). The original array will be not empty 
// and will contain at least "number" even numbers.

// For example:

// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
// ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]



// My solution:

// Filter array for even numbers
// Reverse the filtered array
// Create a new array that is the first "number" amount of numbers
// Reverse it again

function evenNumbers(array, number) {
  let evenNumbers = array.filter(number => {
    return number % 2 === 0
  })
  
  let reversedEvens = evenNumbers.reverse()
  let shortArray = reversedEvens.slice(0, number)
  return shortArray.reverse()
}
