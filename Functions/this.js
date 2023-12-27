function getThis() {
    return this;
  }
  
  const obj1 = { name: "obj1" };
  const obj2 = { name: "obj2" };
  
  obj1.getThis = getThis;
  obj2.getThis = getThis;
  
  console.log(obj1.getThis()); // { name: 'obj1', getThis: [Function: getThis] }
  console.log(obj2.getThis()); // { name: 'obj2', getThis: [Function: getThis] }


 // ------------------------------

 // Create an object
const myObject = {};

// Define a function
function myMethod() {
  console.log("This is my method.");
}

// Attach the function as a method with a different property name
myObject.customMethod = myMethod; // It basically creating a property and we storing method in it

// Now, you can call the method on the object using the new property name
myObject.customMethod(); // Output: "This is my method."