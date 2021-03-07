// Write Number in Expanded Form - Part 2
// This is version 2 of my 'Write Number in Exanded Form' Kata.

// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(1.24); // should return '1 + 2/10 + 4/100'
// expandedForm(7.304); // should return '7 + 3/10 + 4/1000'
// expandedForm(0.04); // should return '4/100'


function expandedForm(num) {
  const numbers = num.toString().split('')
  const trueValues = []
  let isLessThanOne
  numbers.forEach((number, index) => {
    if (number === '.') {
      isLessThanOne = true
    }
    
    if (number !== '0') {
      if (!isLessThanOne) {
        const decimalIndex = numbers.indexOf('.')
        const powerOfTen = numbers.slice(index, decimalIndex).length - 1
        trueValues.push(number * Math.pow(10, powerOfTen))
    } else if (isLessThanOne && number !== '.') {
        const decimalPlaces = numbers.slice(numbers.indexOf('.'), index).length
        const divisor = Math.pow(10, decimalPlaces)
        trueValues.push(`${number}/${divisor}`)
      }
    }  
  })
  return trueValues.join(' + ')
}
