//Description:
//Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

//Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

//If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

//Examples
//"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
//"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
//""  -->  ""

const order = (words) => {
  let orderedWords = []
  let wordsArray = words.split(' ')
  for (let count = 0; count < wordsArray.length; count++) {
    for (let i = 0; i < wordsArray.length; i++) {
      if (wordsArray[i].includes(count + 1)) {
        orderedWords.push(wordsArray[i])
      }
    }
  }
  return orderedWords.join(' ')
}



//Logic:
//Create an empty array
//Separate 'words' into an array
//Count up to the length of 'words'
//Each time count increments, find the word in the word array that contains it's index + 1
//Push it to the empty array
//Join the array
//Return
