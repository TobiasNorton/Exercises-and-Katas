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

// Split the string
// For each number, check it's remainder when divided by 2
// If it's remainder is 0, put in even array
// If it's remainder is 1, put in odd array

// If the even array has a length of 1, it's unique, 
// so return the index of the character in the original array that matches the 
// item in the even array + 1

// Otherwise, return the index of the character in the original array that matches the 
// item in the odd array + 1

