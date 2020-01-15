// const findShortA = s => {
//   const words = s.split(' ')
//   const lengths = words.map(word => {
//     return word.length
//   })
//   const sortedLengths = lengths.sort((a, b) => a - b)
//   return sortedLengths[0]
// }

// const findShortB = s => {
//   const words = s.split(' ')
//   const lengths = words.map(word => {
//     return word.length
//   })
//   return Math.min(...lengths)
// }

const findShortC = s => {
  const words = s.split(' ')
  const lengths = words.map(word => {
    return word.length
  })
  return lengths.reduce((a, b) => a < b ? a : b)
}
