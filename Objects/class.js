class MyClass {
    // Constructor to initialize properties
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    // Instance method
    sayHello() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  
    // Static method
    static staticMethod() {
      console.log("This is a static method.");
    }
  }
  
  // Creating an instance of MyClass
  const instance = new MyClass("Ravi", 23);
  
  // Calling instance method
  instance.sayHello(); // Output: Hello, my name is Ravi and I am 26 years old.
  
  // Calling static method directly on the class
  MyClass.staticMethod(); // Output: This is a static method.
  
  // Extracting properties from the instance
  const { name, age } = instance;
  console.log(name); // Output: John
  console.log(age);  // Output: 30