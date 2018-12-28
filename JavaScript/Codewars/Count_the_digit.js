








const nbDig = (n, d) => {
  let count = 0
  let squaredNumbers = []
  for (let i = 0; i <= n; i++) {
    squaredNumbers.push(i * i)
  }
  let string = squaredNumbers.join('')
  let array = string.split('')
  array.forEach(digit => {
    if (parseInt(digit) === d) {
      count++
    }
  })
  return count
}
