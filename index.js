
// Array methods 


//Concat two arrays
let hege = ["Cecilie", "Lone"];
let stale = ["Emil", "Tobias", "Linus"];
console.log(hege.concat(stale)); //Output : ["Cecilie", "Lone", "Emil", "Tobias", "Linus"]

// List all array items, with keys and values:
let fruits = ["apple", "orange", "cherry"];
fruits.forEach(myFunction);

function myFunction(item, index) {
  console.log(item +"->"+index) //Output : apple->0 orange->1 cherry->2
}

//to get the square root of each element in the array using Map function 
let numbers = [4, 9, 16, 25];
console.log(numbers.map(Math.sqrt)); //Output : [2, 3, 4, 5]


//array filter using a condition 
let ages = [32, 33, 12, 40];
function checkAdult(age) {
  return age >= 18;
}
console.log(ages.filter(checkAdult)); //Output : [32, 33, 40]

// Check if an array includes "Mango"
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.includes("Mango")); //Output : true

// Search an array for the item "Apple" 
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.indexOf("Apple")); //Output : 2


// Get the index of the first element in the array that has a value of 18 or more
let ages = [3, 10, 18, 20];
function checkAdult(age) {
  return age >= 10;
}
console.log(ages.findIndex(checkAdult)); //Output : 1

// Get the value of the first element in the array that has a value of 18 or more
let ages = [3, 10, 18, 20];
function checkAdult(age) {
  return age > 15;
}
console.log(ages.find(checkAdult)); //Output : 18

//Subtract the numbers in the array, starting from the beginning
let numbers = [175, 50, 25];
console.log(numbers.reduce(myFunc));

function myFunc(total, num) {
  return total - num;
  
}


reduce
slice
splice
sort
reverse
concat
pop
push
shift
unhift

