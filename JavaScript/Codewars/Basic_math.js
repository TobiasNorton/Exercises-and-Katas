// In this kata, you will do addition and subtraction on a given string. The return value must be also a string.

// Note: the input will not be empty.

// Examples
// "1plus2plus3plus4"  --> "10"
// "1plus2plus3minus4" -->  "2"


const calculate = (string) => {
  const cutPlus = string.split('plus')
  const numbers = cutPlus.map(item => {
    if (item.includes('minus')) {
      const cutMinus = item.split('minus')
      const cutMinusAsNumbers = cutMinus.map(n => parseInt(n))
      return cutMinusAsNumbers.reduce((a, b) => a - b)
    } else {
      return parseInt(item)
    }
  })
return numbers.reduce((a, b) => a + b).toString()
}


// Or, I've read that eval() is a security risk, but just for the sake of the kata:

const calc = (string) => {
  return eval(string.replace(/plus/gi, '+').replace(/minus/gi, '-')).toString()
}

