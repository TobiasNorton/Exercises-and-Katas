function getOrder(input) {
  const menu = ['Burger', 'Fries', 'Chicken', 'Pizza', 'Sandwich', 'Onionrings', 'Milkshake', 'Coke']
  const correctedItems = []
  
  menu.forEach((item, index) => {
    while (input.includes(item.toLowerCase())) {
      correctedItems.push(item)
      input = input.replace(item.toLowerCase(), '')
    }
  })
  return correctedItems.join(' ')
}
