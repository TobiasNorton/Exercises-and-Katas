/ Return an array containing the numbers from 1 to N, where N is the parametered value. N will never be less than 1 (in C#, N might be less then 1).

/ Replace certain values however if any of the following conditions are met:

/ If the value is a multiple of 3: use the value 'Fizz' instead
/ If the value is a multiple of 5: use the value 'Buzz' instead
/ If the value is a multiple of 3 & 5: use the value 'FizzBuzz' instead

const fizzbuzz = (n) => {
  let items = []
  for (let count = 1; count <= n; count++) {
    items.push(count)
  }
  let fizzBuzzArray = items.map(item => {
    if (item % 3 === 0 && item % 5 !== 0) {
      return 'Fizz'
    } else if (item % 5 === 0 && item % 3 !== 0) {
      return 'Buzz'
    } else if (item % 5 === 0 && item % 3 === 0) {
      return 'FizzBuzz'
    } else {
      return item
    }
  })
  return fizzBuzzArray
}
