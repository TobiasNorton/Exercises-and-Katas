// Description:
// Remove n exclamation marks in the sentence from left to right. n is positive integer.

// Examples:
// remove("Hi!",1) === "Hi"
// remove("Hi!",100) === "Hi"
// remove("Hi!!!",1) === "Hi!!"
// remove("Hi!!!",100) === "Hi"
// remove("!Hi",1) === "Hi"
// remove("!Hi!",1) === "Hi!"
// remove("!Hi!",100) === "Hi"
// remove("!!!Hi !!hi!!! !hi",1) === "!!Hi !!hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",3) === "Hi !!hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",5) === "Hi hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",100) === "Hi hi hi"




const remove = (s, n) => {
  let array = s.split('')
  let numberOfExMarks = 0
  for (let i = 0; i <array.length; i++) {
    if (numberOfExMarks === n) {
      break
    } else if (numberOfExMarks !== n && array[i] === '!') {
    delete array[i]
    numberOfExMarks++
    }
  }
  return array.join('')
}

// Create an array by splitting the string
// numberOfExMarks = 0
// Iterate over the array
// If i === '!', delete it
// Add 1 to numberOfExMarks
// Stop the loop when numberOfExMarks === n
// Return the array, joined as a string
