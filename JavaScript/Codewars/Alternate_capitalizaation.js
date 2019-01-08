// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, 
// and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!


const capitalize = s => {
  let splitString = s.split('')
  let array = []
  
  let evenIndexUpcase = splitString.map((letter, index) => {
    if (index % 2 === 0) {
      return letter.toUpperCase()
    } else {
      return letter
    }
  })
  
  let joinedEvenUpcase = evenIndexUpcase.join('')
  
  let oddIndexUpcase = splitString.map((letter, index) => {
    if (index % 2 === 1) {
      return letter.toUpperCase()
    } else {
      return letter
    }
  })
  
  let joinedOddUpcase = oddIndexUpcase.join('')
  
  array.push(evenIndexUpcase.join(''))
  array.push(oddIndexUpcase.join(''))
  
  return array
}
