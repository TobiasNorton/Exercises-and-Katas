// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples:

// // returns 'www.codewars.com'
// removeUrlAnchor('www.codewars.com#about')

// // returns 'www.codewars.com?page=1' 
// removeUrlAnchor('www.codewars.com?page=1')



// My algorithm:
// If the URL doesn't include a #, return it as is.
// If the URL includes a #:
// Split the string
// Find the index of #
// Keep everything up until that index
// Join it back together

function removeUrlAnchor(url){
  if (!url.includes('#')) {
       return url
  } else {
      let splitString = url.split('')
      let anchorIndex = splitString.findIndex(element => element === '#')
      return splitString.slice(0, anchorIndex).join('')
  }
}
