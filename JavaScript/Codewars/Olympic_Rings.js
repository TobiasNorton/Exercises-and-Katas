// To celebrate the start of the Rio Olympics (and the return of 'the Last Leg' on C4 tonight) this 
// is an Olympic inspired kata. Given a string of random letters, you need to examine each. Some letters 
// naturally have 'rings' in them. 'O' is an obvious example, but 'b', 'p', 'e', 'A', etc are all just as applicable. 
// 'B' even has two! Please note for this kata you can count lower case 'g' as only one ring. Your job is to count the 
// 'rings' in each letter and divide the total number by 2. Round the answer down. Once you have your final score:
// if score is 1 or less, return 'Not even a medal!'; if score is 2, return 'Bronze!'; if score is 3, 
// return 'Silver!'; if score is more than 3, return 'Gold!'; Dots over i's and any other letters don't count as rings.


const olympicRing = (array) => {
  let splitNumbers = array.split('')
  let onePoint = []
  let twoPoints = []

  splitNumbers.forEach(letter => {
    if (letter === 'a' || 
    letter === 'b' || 
    letter === 'd' || 
    letter === 'e' || 
    letter === 'g' ||
    letter === 'o' ||
    letter === 'p' ||
    letter === 'q' ||
    letter === 'A' ||
    letter === 'D' ||
    letter === 'O' ||
    letter === 'P' ||
    letter === 'Q' ||
    letter === 'R') {
      onePoint.push(letter)
      } else if (letter === 'B') {
      twoPoints.push(letter)
      }
    })

  let score = Math.floor((onePoint.length + twoPoints.length * 2) / 2)
  
  if (score <= 1) {
    return 'Not even a medal!'
  } else if (score === 2) {
    return 'Bronze!'
  } else if (score === 3) {
    return 'Silver!' 
  } else {
    return 'Gold!'
  }
}
