// Create a person object without using a constructor
var person = {
    name: "John",
    age: 25,
  
    // Method to greet
    greet: function() {
      return "Hello, my name is " + this.name + " and I am " + this.age + " years old.";
    },
  
    // Method to have a birthday
    haveBirthday: function() {
      this.age++;
      return "Happy Birthday! Now I am " + this.age + " years old.";
    }
  };
  
  // Use the methods and properties
  console.log(person.greet()); // Outputs: Hello, my name is John and I am 25 years old.
  console.log(person.haveBirthday()); // Outputs: Happy Birthday! Now I am 26 years old.