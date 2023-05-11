class Animal {
  constructor(name, age, color, properties) {
    this.name = name
    this.age = age
    this.color = color
    this.properties = properties
  }
  getAnimalInfo() {
    return `${this.name} is ${this.age} years old, has ${this.color} fur, and is ${this.properties}}`
  }
}

class Dog extends Animal {
  constructor(name, age, color, properties, gender, breed) {
    super(name, age, color, properties)
    this.breed = breed
    this.gender = gender
  }
  bark() {
    console.log("woof woof!")
  }
  getAnimalInfo() {
    let boyOrGirl = this.gender == 'Male' ? 'good boy' : 'good girl'
    return `${this.name} is a ${this.age} year old ${this.breed}, has ${this.color} fur, and is a ${boyOrGirl}!`
  }
}
class Cat extends Animal {
  constructor(name, age, color, properties, gender, breed) {
    super(name, age, color, properties)
    this.breed = breed
    this.gender = gender
  }
  meow() {
    console.log("meow meow~")
  }
  getAnimalInfo() {
    let boyOrGirl = this.gender == 'Male' ? 'He' : 'She'
    return `${this.name} is a ${this.age} year old ${this.breed}, has ${this.color} fur, and ${boyOrGirl} is a ${this.properties}!`
  }
}

const goldie = new Dog('Goldie', 5, 'Gold', 'Introvert', 'Female', 'Toy Poodle')
console.log(goldie.getAnimalInfo())
