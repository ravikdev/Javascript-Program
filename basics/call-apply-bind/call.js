function greet(name) {
    console.log(`Hello, ${name}! My name is ${this.fullName}.`);
  }
  
  const person = {
    fullName: 'John Doe'
  };
  
  greet.call(person, 'Alice');
  // Output: Hello, Alice! My name is John Doe.