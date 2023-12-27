function myFunction(p1, p2) {
    return p1 * p2;
  }

  // Traditional function
function addNumbers(a, b) {
    return a + b;
  }
  
  // Arrow function equivalent
  const addNumbersArrow = (a, b) => a + b;
  
  // Usage
  console.log(addNumbers(5, 3)); // Output: 8
  console.log(addNumbersArrow(5, 3)); // Output: 8
//----------------------------------------------// Annoynmous function
const myAnonymousFunction = function() {
    // Function body
    // ...
  };
  // As an argument to another function
  setTimeout(function() {
    // Function body
    // ...
  }, 1000);
  // Anonymous function as a callback to setTimeout
setTimeout(function() {
    console.log("This is an anonymous function used as a callback.");
  }, 1000);
  //------------------------------------------//
  function* generateEvenNumbers() {
  let number = 0;
  while (true) {
    yield number;
    number += 2;
  }
}

// Create an iterator from the generator function
//Generator functions are special functions in JavaScript that allow you to create iterators. 
//They use the function* syntax and can yield values using the yield keyword. 
//The iterator can be used to control the flow of execution, and the function's state is preserved between each yield statement.

function* generateEvenNumbers() {
    let number = 0;
    while (true) {
      yield number;
      number += 2;
    }
  }
  
  // Create an iterator from the generator function
  const evenNumberIterator = generateEvenNumbers();
  
  // Get the first 5 even numbers using the iterator
  for (let i = 0; i < 5; i++) {
    console.log(evenNumberIterator.next().value);
  }

//Imdeitaly Invoked funtion
//It is often used to create a new scope to encapsulate variables and prevent them from polluting the global scope.
//The benefit of using an IIFE is that any variables declared inside it are not accessible from the outside,
// preventing potential naming conflicts with other parts of the code. 
//It's a way to create a private scope for the variables within the function.
(function() {
    const message = "This is an IIFE!";
    console.log(message);
  })();

  //An async function in JavaScript is a 
  //function that allows you to write asynchronous code using a more straightforward and synchronous-like syntax
  
  async function functionName() {
  // Function body with asynchronous code
  const result = await somePromise;
  // ...
  return result;
}

//Call back Funtion
function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
  }
  
  function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
  }

  myCalculator(5, 5, myDisplayer);

  //Map Funtion

  //Reduce Funtion--------------------------------------
  const numbers = [1, 2, 3, 4, 5];

  // The reduce function applies a provided function to accumulate values from an array.
  // It takes a callback function that receives an accumulator and the current value,
  // and it iterates over the array, updating the accumulator with each value.
  const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  
  // In this example, the reduce function calculates the sum of all numbers in the 'numbers' array,
  // starting with an initial accumulator value of 0. The result is the sum of the array elements: 15
  //----------------------------------------------------------
// Filter Function
const numbers4= [1, 2, 3, 4, 5];

// The filter function creates a new array containing all elements that satisfy a provided condition.
// It takes a callback function that returns a Boolean value indicating whether an element should be included.
const evenNumbers = numbers.filter((x) => x % 2 === 0);

// In this example, the filter function creates a new array 'evenNumbers' containing only the even numbers
// from the 'numbers' array: [2, 4]
