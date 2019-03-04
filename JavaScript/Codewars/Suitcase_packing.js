// Mr. Square is going on a holiday. He wants to bring 2 of his favorite squares with him, so he put 
// them in his rectangle suitcase.

// Write a function that, given the size of the squares and the suitcase, return whether the squares 
// can fit inside the suitcase.

// fit_in(a,b,m,n)
// a,b are the sizes of the squares
// m,n are the sizes of the suitcase
// Example
// fit_in(1,2,3,2) should return True
// fit_in(1,2,2,1) should return False
// fit_in(3,2,3,2) should return False
// fit_in(1,2,1,2) should return False


const fit_in = (a, b, m, n) => {
  //if (a * a + b * b <= m * n) {
  if (a <= m && b <= m && a + b <= n ||
      a <= n && b <= n && a + b <= m ) {
    return true
  } else {
    return false
  }
}