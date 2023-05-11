const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]


// Print the price of each product using forEach
products.forEach((item) => {
  console.log(item.price)
})

// Print the product items as follows using forEach
products.forEach((item) => {
  if (typeof item.price !== 'string') console.log("The price of", item.product, "is", item.price, "euros")
  else console.log("The price of", item.product, "is unknown")
})

// Calculate the sum of all the prices using forEach
let sum = 0
products.forEach((item) => {
  sum += item.price
})
// console.log(sum)

// Filter products with prices
console.log(products.filter((item) => item.price !== ' ' && item.price !== ''))

// Use method chaining to get the sum of the prices(map, filter, reduce)
sum = products.map((item) => item.price).filter((item) => item !== ' ').reduce((a, b) => a + b)
console.log(sum)

// Calculate the sum of all the prices using reduce only
sum = products.reduce((acc, curr) => {
  if (typeof curr.price !== 'string') return acc + curr.price
  else return acc
}, 0)
console.log(sum)

// Find the first product which doesn't have a price value
console.log(products.find((item) => item.price === ' ' || item.price === ''))

// Find the index of the first product which does not have price value
console.log(products.findIndex((item) => item.price === ' ' || item.price === ''))

// Check if some products do not have a price value
console.log(products.some((item) => item.price === ' ' || item.price === ''))

// Check if all the products have price value
console.log(products.every((item) => item.price === ' ' || item.price === ''))

// Explain the difference between forEach, map, filter and reduce
//
// forEach is used to iterate over an array and do something with each item
// map is used to iterate over an array and return a new array with the same length
// filter is used to iterate over an array and return a new array with the items that pass the condition

// Explain the difference between filter, find and findIndex
//
// filter returns a new array with the items that pass the condition
// find returns the first item that passes the condition
// findIndex returns the index of the first item that passes the condition

// Explain the difference between some and every
//
// some returns true if at least one item passes the condition
// every returns true if all items pass the condition

