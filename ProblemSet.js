// Refactor your code from problem set one to use variables. Create a variable for your first name and one for your last name. Print them on separate lines and then try printing them on the same line.

let nameFirst = "Theo"
let nameLast = "Diehl"

console.log(nameFirst)
console.log(nameLast)

console.log (nameFirst + " " + nameLast)

// Assign the following values to variables. Decide how best to name them and if they should be created with const or let. There are a couple ways to think about each one. Write a brief sentence about why you chose the variable name you did and why you chose const or let.

// The year 1776 
const year1776 = 1776 // chose this because the year will never change
// your age
let myAge = 28 // chose this because my age may need to change
// the golden ratio (google this one if you don't know it)
const goldenRatio = 1.61803398875 // chose this because it will never change
// the name of your home country
const homeCountry = "United States" //could have gone either way but chose this because why would I ever change a string.
// The total change due for a $25.76 bill paid for with a $50 bill.
let changeDue = 25.24 //chose let because I could use this variable for different scenario