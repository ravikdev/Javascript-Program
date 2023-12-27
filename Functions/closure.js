// a closure is a feature that allows a function to remember and access variables from its outer 
// (enclosing) scope even after that scope has finished executing.
function outerFunction() {
    let outerVariable = 'I am from the outer function';
  
    function innerFunction() {
      console.log(outerVariable);
    }
  
    return innerFunction;
  }
  
  // Create a closure by calling outerFunction and assigning the result to a variable
  let closure = outerFunction();
  
  // Invoke the closure
  closure(); // Output: I am from the outer function