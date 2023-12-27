//number To sttring
let number=42;
let str = number.toString();//toString() method is available as a method on the Number object.
console.log(str);

//
let string = String(number);
console.log(string);

//String to number
let str1 ="56";
let num1= Number(str1);
//Parseint() and parse float(): These functions parse a string and return 
let str2 ="444";
let num2= parseInt(str2);
console.log("num2");

let str3 ="3.12"
let num3 = parseFloat(str3);
console.log(num3);
//Array to string
var arr = ["Ravi", 25, Ambala]
var str6 = arr.toString()
console.log(arr);

//Object to Json

var obj = { name:"ravi", City:Ambala}
var json= Json.stringfy(obj);
console.log(json);

//Json to Object

var json = '{"name":"Ravi","Age":25}'
var obj =JSON.parse(json);


var str6 ="123";
var arr2= str6.split(",");



