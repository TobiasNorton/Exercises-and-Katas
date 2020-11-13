// Your task, is to create NxN multiplication table, of size provided in parameter.

// For example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9

// For given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]



const multiplicationTable = (size) => {
  const table = []
  
  for (let i = 1; i <= size; i++) {
    let row = []
    for (let j = 1; j <= size; j++) {
      let num = j * i
      row.push(num)
    }
    table.push(row)
  }
  return table
  
  
  
