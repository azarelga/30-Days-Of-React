const users = [
  {
    _id: 'ab12ex',
    username: 'Alex',
    email: 'alex@alex.com',
    password: '123123',
    createdAt: '08/01/2020 9:00 AM',
    isLoggedIn: false,
  },
  {
    _id: 'fg12cy',
    username: 'Asab',
    email: 'asab@asab.com',
    password: '123456',
    createdAt: '08/01/2020 9:30 AM',
    isLoggedIn: true,
  },
  {
    _id: 'zwf8md',
    username: 'Brook',
    email: 'brook@brook.com',
    password: '123111',
    createdAt: '08/01/2020 9:45 AM',
    isLoggedIn: true,
  },
  {
    _id: 'eefamr',
    username: 'Martha',
    email: 'martha@martha.com',
    password: '123222',
    createdAt: '08/01/2020 9:50 AM',
    isLoggedIn: false,
  },
  {
    _id: 'ghderc',
    username: 'Thomas',
    email: 'thomas@thomas.com',
    password: '123333',
    createdAt: '08/01/2020 10:00 AM',
    isLoggedIn: false,
  },
]

const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy'],
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy'],
  },
]
function signUp(username, email, password) {
  if (users.forEach(user => user.email === email)) {
    console.log("Email already exists")
  }
  if (users.forEach(user => user.username === username)) {
    console.log("Username already exists")
  }
  let newUser = {
    _id: Math.random().toString(36),
    name: username,
    createdAt: new Date(),
    password: password,
    email: email,
    isLoggedIn: true,
  }
  console.log("User", newUser.name, "created!")
  users.push(newUser);
}
function signIn(email, password) {

  let accountIdx = 0
  users.forEach(user => {
    if (user.email === email) accountIdx = users.indexOf(user);
  })
  if (users[accountIdx].password === password) {
    console.log("User", users[accountIdx].name, "logged in!")
    users[accountIdx].isLoggedIn = true
  } else {
    console.log("Incorrect password or email!")
  }
}
function rateProduct(id, rate, userId) {
  let productIdx = 0
  products.forEach(product => {
    if (product._id === id) productIdx = products.indexOf(product);
  })
  products[productIdx].ratings.push({ userId: userId, rate: rate })
}
function averageRating(id) {
  let productIdx = 0
  products.forEach(product => {
    if (product._id === id) productIdx = products.indexOf(product);
  })
  let averageRating = 0
  products[productIdx].ratings.forEach(rating => {
    averageRating += rating.rate
  })
  averageRating /= products[productIdx].ratings.length
  return averageRating
}

function likeProduct(id, userId) {
  let productIdx = 0
  products.forEach(product => {
    if (product._id === id) productIdx = products.indexOf(product);
  })
  if (products[productIdx].likes == false) products[productIdx].likes.push(userId)
  else products[productIdx] = products[productIdx].filter(id => id !== userId)
}
