// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.



const expandedForm = (number) => {
  const numberStrings = number.toString().split('')
  const trueValues = []      
  numberStrings.forEach((string, index) => {
    const remainingLength = numberStrings.length - index - 1
    if (string !== '0') {
      trueValues.push(string * Math.pow(10, remainingLength))
    }
  })
  return trueValues.join(' + ')
}
