// Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one 
// of the given numbers differs from the others. Bob observed that one number usually differs from 
// the others in evenness. Help Bob — to check his answers, he needs a program that among the given 
// numbers finds one that is different in evenness, and return a position of this number.

// ! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the 
// elements start from 1 (not 0)

// ##Examples :

// iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even

// iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd



// My plan:
// Split the string
// For each number, check it's remainder when divided by 2
// If it's remainder is 0, put in even array
// If it's remainder is 1, put in odd array

// If the even array has a length of 1, it's unique, 
// so return the index of the character in the original array that matches the 
// item in the even array + 1

// Otherwise, return the index of the character in the original array that matches the 
// item in the odd array + 1



const iqTest = (numbers) => {
  let numbersArray = numbers.split(' ')
  let even = []
  let odd = []
  numbersArray.forEach(number => {
    if (number % 2 === 0) {
      even.push(number)
    } else {
      odd.push(number)
    }
  })
  if (even.length === 1) {
    return numbersArray.indexOf(even[0]) + 1
  } else {
    return numbersArray.indexOf(odd[0]) + 1
  }
}



