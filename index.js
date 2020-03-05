
// Array methods 


//Concat two arrays
let hege = ["Cecilie", "Lone"];
let stale = ["Emil", "Tobias", "Linus"];
console.log(hege.concat(stale)); //Output : ["Cecilie", "Lone", "Emil", "Tobias", "Linus"]

// List all array items, with keys and values:
let fruits = ["apple", "orange", "cherry"];
fruits.forEach(myFunction);

function myFunction(item, index) {
  console.log(item +"->"+index) //apple->0 orange->1 cherry->2
}

//to get the square root of each element in the array using Map function 
