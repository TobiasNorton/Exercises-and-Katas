// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
// The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Note: If the number is a multiple of both 3 and 5, only count it once.

// Solution 1
const solutionA = number => {
  const multiplesArray = []
  for (let i = 3; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
    multiplesArray.push(i)
    }
  }
  return multiplesArray.reduce((a, b) => a + b, 0)
}


// Solution 2
const solutionB = number => {
  let total = 0
  for (let i = 3; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
    total += i
    }
  }
  return total
}
