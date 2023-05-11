function solveQuadratic(a, b, c) {
  if (a === undefined) { return [0] }
  ans = [
    (-1 * b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / 2 * a,
    (-1 * b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / 2 * a
  ]
  if (ans[0] === ans[1]) return ans[0]
  else return ans
}
console.log(solveQuadratic()) // {0}
console.log(solveQuadratic(1, 4, 4)) // {-2}
console.log(solveQuadratic(1, -1, -2)) // {2, -1}
console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
console.log(solveQuadratic(1, 0, -4)) //{2, -2}
console.log(solveQuadratic(1, -1, 0)) //{1, 0}

function printArray(arr) {
  arr.forEach(element => {
    console.log(element)
  })
}

function showDateTime() {
  let now = new Date()
  console.log(`${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`)
}
showDateTime()

function reverseArray(array) {
  for (let index = 0; index < array.length / 2; index++) {
    let temp = 0
    temp = array[index]
    array[index] = array[array.length - index - 1]
    array[array.length - index - 1] = temp
  }
  return array
}

console.log(reverseArray([1, 2, 3, 4, 5]))
//[5, 4, 3, 2, 1]
console.log(reverseArray(['A', 'B', 'C']))
//['C', 'B', 'A']

function capitalizeArray(array) {
  let capitalizedarray = []
  array.forEach(element => {
    capitalizedarray.push(element.toUpperCase())
  })
  return capitalizedarray
}

function addItem(item, array) {
  array.push(item)
  return array
}

function removeItem(item, array) {
  return array.filter(element => element !== item)
}

function evensAndOdds(num) {
  if (num % 2 == 0) {
    console.log("The number of odds are", num / 2)
    console.log("The number of evens are", num / 2 + 1)
  } else {
    console.log("The number of odds are", Math.ceil(num / 2))
    console.log("The number of evens are", Math.ceil(num / 2))
  }
}
evensAndOdds(100)

function sum(...args) {
  let sum = 0
  args.forEach(element => {
    sum += element
  })
  return sum
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8))

function userIdGenerator() {
  return Math.random().toString(36).substring(2, 9)
}
console.log(userIdGenerator())
