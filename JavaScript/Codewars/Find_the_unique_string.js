// There is an array of strings. All strings contains similar letters except one. Try to find it!

// findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
// findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'
// Strings may contain spaces. Spaces is not significant, only non-spaces symbols matters. E.g. string that contains only spaces is like empty string.

// It’s guaranteed that array contains more than 3 strings.



function findUniq(arr) {
  const simpleStrings = arr.map(string => [...new Set(string.toLowerCase().split('').sort())].join('').replace(/ /g, ''))
  for (let i = 0; i < arr.length; i++) {
    if (simpleStrings[i] !== simpleStrings[i + 1] && simpleStrings[i + 1] === simpleStrings[i + 2]) {
      return arr[i]
    } else if (simpleStrings[i] !== simpleStrings[i + 1] && simpleStrings[i + 1] !== simpleStrings[i + 2]) {
      return arr[i + 1]
    } else if (simpleStrings[i] === simpleStrings[i + 1] && simpleStrings[i + 1] !== simpleStrings[i + 2]) {
      return arr[i + 2]
    }
  }
}



