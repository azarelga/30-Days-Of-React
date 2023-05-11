// access countries variable from countries.js file 
countries = require('./countries.js')
webTechs = require('./web_techs.js')



let text =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let words = text.split(' ')
console.log(words)
console.log(words.length)

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('Meat')
shoppingCart.push('Sugar')
shoppingCart.pop()
shoppingCart[3] = 'Green Tea'

