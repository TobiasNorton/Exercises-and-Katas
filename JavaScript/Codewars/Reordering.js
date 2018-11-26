//There is a sentence which has a mistake in it's ordering.

//The part with a capital letter should be the first word.

//Please build a function for re-ordering

//>>> re_ordering('ming Yao')
//'Yao ming'

//>>> re_ordering('Mano donowana')
//'Mano donowana'

//>>> re_ordering('wario LoBan hello')
//'LoBan wario hello'

//>>> re_ordering('bull color pig Patrick')
//'Patrick bull color pig'





function reOrdering(text){
 let newArray = []
 let wordArray = text.split(' ')
 for (let index = 0; index < wordArray.length; index++) {
    let word = wordArray[index]
    word[0] === word[0].toUpperCase() ? newArray.unshift(word) : newArray.push(word)
  }
  return newArray.join(' ').toString()
}
