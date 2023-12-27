// -------var variable---------
//Global scope
var a=1;

function test(){
    console.log(a);
}
test();
//Function scope
function test(){
    var b=2;
    console.log(a);
}
// console.log("function scope refrence error:",b);
//user can redeclare the variable.
var c=10
var c=12
console.log(c);

//Calling before decalring give undefined error.
console.log("d",d);
var d = 10;