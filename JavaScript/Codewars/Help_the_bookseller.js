// A bookseller has lots of books classified in 26 categories labeled A, B, ... Z. Each book 
// has a code c of 3, 4, 5 or more characters. The 1st character of a code is a capital letter 
// which defines the book category.

// In the bookseller's stocklist each code c is followed by a space and by a positive integer n 
// (int n >= 0) which indicates the quantity of books of this code in stock.

// For example an extract of a stocklist could be:

// L = {"ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"}.
// or
// L = ["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"] or ....
// You will be given a stocklist (e.g. : L) and a list of categories in capital letters e.g :

// M = {"A", "B", "C", "W"} 
// or
// M = ["A", "B", "C", "W"] or ...
// and your task is to find all the books of L with codes belonging to each category of M and to sum 
// their quantity according to each category.

// For the lists L and M of example you have to return the string (in Haskell/Clojure/Racket a list of pairs):

// (A : 20) - (B : 114) - (C : 50) - (W : 0)
// where A, B, C, W are the categories, 20 is the sum of the unique book of category A, 114 the sum 
// corresponding to "BKWRK" and "BTSQZ", 50 corresponding to "CDXEF" and 0 to category 'W' since there are no code beginning with W.

// If L or M are empty return string is "" (Clojure and Racket should return an empty array/list instead).

// Note:
// In the result codes and their values are in the same order as in M.



// First attempt:

function stockList(listOfArt, listOfCat){
  const filteredStocklistItems = listOfArt.filter(item => {
    return listOfCat.includes(item[0])
  })
  const categoryQuantityPairs = filteredStocklistItems.map(item => {
    const subarray = item.split(' ')
    const category = subarray[0][0]
    const quantity = Number(subarray[1])
    return [category, quantity]
  })

  const cycled = []
  const categoryTotals = []
  for (let i = 0; i < categoryQuantityPairs.length; i++) {
    if (!cycled.includes(categoryQuantityPairs[i][0])) {
      cycled.push(categoryQuantityPairs[i][0])
      categoryTotals.push(categoryQuantityPairs[i])
    } else {
      const category = categoryTotals.find(total => total[0] === categoryQuantityPairs[i][0])
      category[1] += categoryQuantityPairs[i][1]
    }
  }
  const categoryTotalStrings = []
    listOfCat.forEach(category => {
      if (cycled.includes(category)) {
        const total = categoryTotals.find(total => total[0] === category)
        categoryTotalStrings.push(`(${category} : ${total[1]})`)
      } else {
        categoryTotalStrings.push(`(${category} : 0)`) 
      }
    })
  return categoryTotals.every(total => total[1] === 0) ? '' : categoryTotalStrings.join(' - ')
}


// Second attempt, much better!

function stockList(listOfArt, listOfCat){
  if (!listOfArt.length || !listOfCat.length) {
    return ''
  }
  
  return listOfCat.map(category => {
    const neededStocklistItems = listOfArt.filter(item => item[0] === category)
    const quantity = neededStocklistItems.reduce((a, b) => {
      return Number(a) + Number(b.split(' ')[1])
    }, 0)
    return `(${category} : ${quantity})`
  }).join(' - ')
}


