function callback(name,mycall){
console.log('my call back funtion',name);
setTimeout(mycall,1000);

}

function mycallback(){
    var text = ("calling call back funtion");
    console.log(text);
}

callback('ravi',mycallback);


