// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.


// Solution 1
const findShortA = s => {
  const words = s.split(' ')
  const lengths = words.map(word => {
    return word.length
  })
  const sortedLengths = lengths.sort((a, b) => a - b)
  return sortedLengths[0]
}


// Solution 2
const findShortB = s => {
  const words = s.split(' ')
  const lengths = words.map(word => {
    return word.length
  })
  return Math.min(...lengths)
}


// Solution 3
const findShortC = s => {
  const words = s.split(' ')
  const lengths = words.map(word => {
    return word.length
  })
  return lengths.reduce((a, b) => a < b ? a : b)
}
