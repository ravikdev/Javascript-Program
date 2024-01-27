let myPromise = new Promise(function(resolve,reject) {
  x=1 
  
  if(x==1){
    resolve('x =1');
  }
else{
    reject('error');
}
}
)


myPromise.then(function(value){
  console.log(value);
})



  // let myPromise = new Promise(function(myResolve, myReject) {
  //   let x = 10;
  
  // // some code (try to change x to 5)
  
  //   if (x == 0) {
  //     myResolve("OK");
  //   } else {
  //     myReject("Error");
  //   }
  // });
  
  // myPromise.then(
  //   function(value) {console.log(value)},
  // );
  // myPromise.catch(
  //   function(error) {console.log(error)},
  // );


