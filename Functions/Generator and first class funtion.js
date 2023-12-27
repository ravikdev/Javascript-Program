// 1. Generator Functions
function* infinitenumber(){
    let num = 1;
    
    while(true){
        yield num;
        num++
    }
}
// let's create an instance of oddNumberGenerator function
const gen = infinitenumber();

//now generate and print the first 5 odd numbers
for(let i = 0; i < 5; i++){
    console.log(gen.next().value);
}



// 2. First Class Functions : The functions that can be treated just like a variable.

// Assigning a function to a variable
const add = function(a, b) {
    return a + b;
  };
  
  // Passing a function as an argument to another function
  function operate(operator, a, b) {
    return operator(a, b);
  }
  
  const result1 = operate(add, 3, 5); // Result: 8
  
  // Returning a function from another function
  function createMultiplier(multiplier) {
    return function(num) {
      return num * multiplier;
    };
  }
  
  const double = createMultiplier(2);
  const triple = createMultiplier(3);
  
  const result2 = double(5); // Result: 10
  const result3 = triple(5); // Result: 15
  
  // Storing functions in an array
  const operations = [add, double, triple];
  const result4 = operations[0](2, 4); // Result: 6
  


