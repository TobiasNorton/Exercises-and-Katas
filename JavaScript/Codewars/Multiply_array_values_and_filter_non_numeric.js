
// Your task is to write a function, which takes two arguments and returns an array. 
// First argument is an array of values, scecond is multiplier. Function is named 
// "multiplyAndFilter" and it should filter all non-numeric values and multiply the 
// rest by given multiplier.


const multiplyAndFilter = (array, multiplier) => {
  let onlyNumbers = array.filter(item => typeof item === 'number')
  return onlyNumbers.map(number => number * multiplier)
}
