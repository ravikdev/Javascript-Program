// ------------------Another example----------------------
// Higher-order function example: multiplier

// The multiplier function takes a number and returns a new function
// The returned function takes another number and multiplies it by the original 

debugger;
function multiplier(factor) {
    // The returned function is a closure that "remembers" the factor parameter
    return function (x) {
      return x * factor;
    };
  }
  
  // Example usage:
  
  // Creating a function that multiplies by 2
  const multiplyByTwo = multiplier(2);
  
  // Creating a function that multiplies by 5
  const multiplyByFive = multiplier(5);
  
  // Using the created functions
  console.log(multiplyByTwo(4)); // Output: 8 (4 * 2)
  console.log(multiplyByFive(3)); // Output: 15 (3 * 5)
