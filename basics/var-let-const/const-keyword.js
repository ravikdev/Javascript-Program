//Everything similar to let except
//you can't change const variable value 

// const test=4;
// function any(){
// test = 5;
// console.log(test);
// }
// any(); //This function try to change test variable;


// Also you can't assign object properties
const obj ={
    firstname : "ravi",
    lastname : "kumar"
}
// This type of property assignment is possible.
obj.firstname = "Raavi"
console.log(obj.firstname);

//This not possible 
 obj ={
    firstname :"gautam",
    lastname :"vaish"
}
