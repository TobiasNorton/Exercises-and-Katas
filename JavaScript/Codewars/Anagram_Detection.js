// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).
// Note: anagrams are case insensitive
// Complete the function to return true if the two arguments given are anagrams of theeach other; return false otherwise.

// Examples:
// "foefet" is an anagram of "toffee"
// "Buckethead" is an anagram of "DeathCubeK"


const isAnagram = (test, original) => {
  let splitTest = test.toLowerCase().split('').sort().join('')
  let splitOriginal = original.toLowerCase().split('').sort().join('')
  return splitTest === splitOriginal ? true : false
  }
