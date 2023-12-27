// //The let key word is improved version of let keyword.

// //let keyword have only block scope
let a = 3;
function test(){
    let b = 10;
    console.log(a);
    console.log(b);

}
test(); // Print a and b;
console.log(b);//Reference error because of bloack scope

// // Can't redecalare let variable

// let c=10;
// let c=12;//giving error because you can't redeclare the variable
// c=13 //allowed

//Can redeclare in different block
let d=13;
function redeclareLet(){
    d=14;
    console.log(d);
}
redeclareLet();
console.log(d);
