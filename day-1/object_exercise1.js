let dog = {

}
console.log(dog)

dog = {
  name: "goldie",
  age: 5,
  bark: function() {
    return "woof woof"
  },
  color: 'gold',
  breed: 'golden retriever',
  getDogInfo: function() {
    return `${this.name} is a ${this.age} year old ${this.color} ${this.breed}.`
  },
}

console.log(dog.getDogInfo())

const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}
let max = 0
let max_object = {}
let loggedIn = 0
let moreThan50 = 0
let MERNdevs = []
for (person of Object.keys(users)) {
  if (users[person].points > max) {
    max_object = users[person]
    max = max_object.points
  }
  if (users[person].points >= 50) {
    moreThan50++
  }
  if (users[person].isLoggedIn) {
    loggedIn++
  }
  if (users[person].skills.includes('MongoDB') && users[person].skills.includes('Express') && users[person].skills.includes('React') && users[person].skills.includes('Node')) {
    MERNdevs.push(person)
  }
}
console.log(max_object)
console.log("Users that are logged in are", loggedIn)
console.log("Users that have points more than 50 are", moreThan50)
console.log("Users that MERN developers are", MERNdevs.join(' and '))

const me = {
  Azarel: {
    email: 'azarelgrahandito@gmail.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node', 'C++', 'Python'],
    age: 20,
    isLoggedIn: true,
    points: 20,
  }
}
users.Azarel = me.Azarel
console.log(users)

console.log("Keys of users object :", Object.keys(users).join(", "))
const values = Object.values(users)
console.log("Values of users object :", values.join(", "), values)
