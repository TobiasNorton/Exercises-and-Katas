You work in the best consumer electronics corporation, and your boss wants to find out which three products generate the most revenue. Given 3 lists of the same length like these:

products: ["Computer", "Cell Phones", "Vacuum Cleaner"]
amounts: [3, 24, 8]
prices: [199, 299, 399]
return the three product names with the highest revenue (amount * price).


const top3 = (products, amounts, prices) => {
  const productRevenues = products.map((product, index) => {
    return {
      product,
      revenue: amounts[index] * prices[index]
    }
  })
  const sorted = productRevenues.sort((a, b) => {
    return b.revenue - a.revenue
  })
  return [sorted[0].product, sorted[1].product, sorted[2].product]
}
