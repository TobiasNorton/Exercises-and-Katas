// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, and u as vowels for this Kata.

// The input string will only consist of lower case letters and/or spaces.



const getCount = str => {
  var vowelsCount = 0
  let array = str.split('')
  for (let i = 0; i < array.length; i++) {
    if (/[aeiou]/.test(array[i])) {
      vowelsCount++
    }
  }
  return vowelsCount;
}
