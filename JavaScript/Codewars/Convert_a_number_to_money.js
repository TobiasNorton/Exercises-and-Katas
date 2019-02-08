Simplified number to money converter.

Note:

truncate to 2 decimal places
don't keep trailing zeros
input will be a positive number with at least two trailing digits
Examples:

2546.2562 --> '2,546.25'

1500.342626 --> '1,500.34'

100.2134 --> '100.21'

Taken from 'Formatting a number as price' (Kyu 5)



// Convert number to string
// Find the index of the decimal and add 2 to determine the end of the number
// Remove the remaining numbers after that
// Convert back to a number so we can use .toLocalString
// .toLocaleString

const numberToMoney = (n) => {
  let string = n.toString()
  let sliceAtIndex = string.indexOf('.') + 3
  let slicedString = string.slice(0, sliceAtIndex)
  let number = Number(slicedString)
  return number.toLocaleString('en')
}
