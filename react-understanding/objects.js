function createObject(name, age, city) {
    // Creating an object with the provided parameters
    var person = {
      name: name,
      age: age,
      city: city
    };
  
    // Returning the created object
    return person;
  }
  
  // Example usage
  var myPerson = createObject("John Doe", 25, "New York");
  console.log(myPerson);