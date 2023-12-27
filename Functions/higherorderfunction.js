// Higher-order function example: delayedGreeting

// The delayedGreeting function takes a name and a delay time (in milliseconds)
// It returns a function that, when invoked, will log a greeting with the provided name after the specified delay

function delayedGreeting(name, delay) {
    return function () {
      console.log(name,delay);
      
    };
  }
// Funtion with some calculation
//   function delayedGreeting(name, delay) {
//     return function () {
//       setTimeout(function () {
//         console.log(`Hello, ${name}!`);
//       }, delay);
//     };
//   }
  
  // Example usage:
  
  // Creating a delayed greeting for "John" with a delay of 2000 milliseconds (2 seconds)
  const greetJohn = delayedGreeting("John", 2000);
  
  // Creating a delayed greeting for "Alice" with a delay of 1000 milliseconds (1 second)
  const greetAlice = delayedGreeting("Alice", 1000);
  
  // Invoking the delayed greetings after the specified delays
  greetJohn(); // Will log "Hello, John!" after 2 seconds
  greetAlice(); // Will log "Hello, Alice!" after 1 second

