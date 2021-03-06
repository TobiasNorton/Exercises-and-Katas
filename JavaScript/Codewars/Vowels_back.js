// You need to play around with the provided string (s).

// Move consonants forward 9 places through the alphabet. If they pass 'z', start again at 'a'.

// Move vowels back 5 places through the alphabet. If they pass 'a', start again at 'z'. For our Polish friends this kata does not count 'y' as a vowel.

// Exceptions:

// If the character is 'c' or 'o', move it back 1 place. For 'd' move it back 3, and for 'e', move it back 4.

// If a moved letter becomes 'c', 'o', 'd' or 'e', revert it back to it's original value.

// Provided string will always be lower case, won't be empty and will have no special characters.


function vowelBack(s){
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  const consonants = 'bfghjklmnpqrstvwxyz'
  const vowels = 'aiu'
  const code = 'code'
  const splitString = s.split('')
  const newLetters = splitString.map(letter => {
    const indexInAlphabet = alphabet.indexOf(letter)
    let newLetter
    if (consonants.includes(letter)) {
      newLetter = alphabet[indexInAlphabet + 9] || alphabet[indexInAlphabet - 17]
    } else if (vowels.includes(letter)) {
      newLetter = alphabet[indexInAlphabet - 5] || alphabet[indexInAlphabet + 21]
    } else if (letter === 'c' || letter === 'o') {
      newLetter = alphabet[indexInAlphabet - 1]
    } else if (letter === 'd') {
      newLetter = alphabet[indexInAlphabet - 3]
    } else if (letter === 'e') {
      newLetter = alphabet[indexInAlphabet - 4]
    }
    if (code.includes(newLetter)) {
      return letter
    }
    return newLetter
  })
  return newLetters.join('')
}
