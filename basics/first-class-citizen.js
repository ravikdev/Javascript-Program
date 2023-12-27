// When function is treated like any other variable it can be passed as argument to other function,
// assign to variable
//returned from another function
var myfuntion =function greet(name,callback){  //assigning to another funtion
    console.log('hi my name is ', name);
    callback();
}

function mycallback(){
    console.log("this is my call back funtion");
}


// great('ravi',mycallback);
myfuntion('ravi',mycallback);


