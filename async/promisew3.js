// function myDisplayer(some) {
//     console.log(some)
//   } 
// Not necessary to use this function
  
  let myPromise = new Promise(function(myResolve, myReject) {
    let x = 10;
  
  // some code (try to change x to 5)
  
    if (x == 0) {
      myResolve("OK");
    } else {
      myReject("Error");
    }
  });
  

  // myPromise.then(
  //   function(value) {myDisplayer(value);},
  //   function(error) {myDisplayer(error);}
  // );
  myPromise.then(
    function(value) {console.log(value)},
  );
  myPromise.catch(
    function(error) {console.log(error)},
  );



