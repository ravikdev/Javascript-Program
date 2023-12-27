// Creating a set
const mySet = new Set();

 

// Adding elements to the set
mySet.add("apple");
mySet.add("banana");
mySet.add("orange");
mySet.add("apple"); // Adding a duplicate element, but it won't be added to the set

 

// Checking the size of the set
console.log(mySet.size); // Output: 3

 

// Checking if an element exists in the set
console.log(mySet.has("banana")); // Output: true
console.log(mySet.has("grape"));  // Output: false

 

// Removing an element from the set
mySet.delete("orange");

 

// Looping through the set
mySet.forEach((element) => {
  console.log(element);
});
// Output: "apple", "banana"

 

// Clearing the set
mySet.clear();

 

// Checking the size after clearing
console.log(mySet.size); // Output: 0