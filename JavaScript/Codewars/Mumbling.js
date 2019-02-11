// This time no story, no theory. The examples below show you how to write function accum:

// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.



//My algorithm:

// Split the string into an array
// For each letter, repeat the letter it's index + 1 amount of times
// For each string in the new array, capitalize the first letter
// Join with hyphens



const accum = (s) => {
  let arrayOfMultiples = []
	let splitString = s.split('')
  splitString.forEach((letter, index) => {
    arrayOfMultiples.push(letter.repeat(index + 1).toLowerCase())
  })
  let capitalized = arrayOfMultiples.map(string => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  })
  return capitalized.join('-')
}





