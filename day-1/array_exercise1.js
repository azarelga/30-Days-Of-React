const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB',
]

// Declare an empty array;
let arr = []

// Declare an array with more than 5 number of elements
arr = [1, 2, 3, 4, 5]

// Find the length of your array
console.log("arr length is :", arr.length)
console.log()

// Get the first item, the middle item and the last item of the array
console.log("arr first item :", arr[0])
console.log("arr middle item: ", arr[Math.floor(arr.length / 2)])
console.log("arr last item: ", arr[arr.length - 1])
console.log()

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = ["Azarel", 19, true, "Katalia", 2003]

// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = [
  "Facebook", "Google",
  "Microsoft", "Apple", "IBM", "Oracle", "Amazon"
]

// Print the array using console.log()
console.log(itCompanies)
console.log()

// Print the number of companies in the array
console.log(itCompanies.length)
console.log()


// Print the first company, middle and last company
console.log(itCompanies[0], itCompanies[Math.floor(itCompanies.length / 2)], itCompanies[itCompanies.length - 1])
console.log()


// Print out each company
for (let index = 0; index < itCompanies.length; index++) {
  console.log(itCompanies[index]);
}
console.log()


// Change each company name to uppercase one by one and print them out
// console.log(itCompanies.toString)


// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(itCompanies.join(", "), "are big IT companies")
console.log()


// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let index = itCompanies.indexOf("Facebook")
index != -1
  ? console.log(itCompanies[index], "exist in the array")
  : console.log("Company not found in the array")

// Filter out companies which have more than one 'o' without the filter method


// Sort the array using sort() method
itCompanies.sort()
console.log(itCompanies)
console.log()

// Reverse the array using reverse() method
itCompanies.reverse()
console.log(itCompanies)
console.log()

// Slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 3))

// Slice out the last 3 companies from the array
console.log(itCompanies.slice(itCompanies.length - 4, itCompanies.length))

// Slice out the middle IT company or companies from the array
console.log(itCompanies.slice(1, itCompanies.length - 1))

// Remove the first IT company from the array
itCompanies.shift()
console.log(itCompanies)
console.log()

// Remove the middle IT company or companies from the array
itCompanies = [itCompanies[0], itCompanies[itCompanies.length - 1]]
console.log(itCompanies)
console.log()


// Remove the last IT company from the array
itCompanies.pop()
console.log(itCompanies)
console.log()

// Remove all IT companies
itCompanies = Array()
console.log(itCompanies)
console.log()

