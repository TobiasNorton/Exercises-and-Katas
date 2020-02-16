// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// solution("camelCasing")  ==  "camel Casing"


function solution(string) {
  const letters = []
  const splitString = string.split('')
  splitString.forEach((character, index) => {
    if (character !== character.toLowerCase()) {
      letters.push(` ${character}`)
    } else {
      letters.push(character)
    }
  })
  return letters.join('')
}
