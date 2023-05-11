function userIdGeneratedByUser() {
  let numberOfChars = prompt()
  let manyIds = prompt()
  for (let index = 0; index < manyIds; index++) {
    console.log(Math.random().toString(36).substring(0, numberOfChars))
  }
}
userIdGeneratedByUser()

function generateColors(type, numberOfColors) {
  let colors = []
  if (type === "rgb") {
    for (let index = 0; index < numberOfColors; index++) {
      colors.push(`rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`)
    }
  } else if (type === "hex") {
    for (let index = 0; index < numberOfColors; index++) {
      colors.push(`#${Math.floor(Math.random() * 16777215).toString(16)}`)
    }
  }
  return colors
}

function shuffleArray(array) {
  let shuffledArray = []
  while (array.length > 0) {
    let randomIndex = Math.floor(Math.random() * array.length)
    shuffledArray.push(array[randomIndex])
    array.splice(randomIndex, 1)
  }
  return shuffledArray
}

function factorial(num) {
  for (let index = num - 1; index > 0; index--) {
    num *= index
  }
  return num
}

function isEmpty() {
  if (arguments.length == 0) {
    return true
  } else {
    return false
  }
}

function average() {
  let sum = 0
  for (let index = 0; index < arguments.length; index++) {
    sum += arguments[index]
  }
  return sum / arguments.length
}
