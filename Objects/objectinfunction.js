// Here will creating a function and it will have a object and we wil pass value to the function and object will read those parameters. 
// And return the function

function createPerson(name,age){
  const Person ={
    name:name,
    age:age 
  }


  return Person
 // we have to retun the object to use it.
}

const John = createPerson('Ravi',23);
console.log (John);
