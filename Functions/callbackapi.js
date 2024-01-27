function fetch(callback){
    console.log('data is fetching');
    setTimeout(function(){
        const data ='data is fetched';
        callback(data);

    }, 3000);
}

function handle(data){
    console.log(data);
}

fetch(handle);

// // Example function with a callback
// function fetchData(callback) {
//   // Simulate fetching data (asynchronous operation)
//   setTimeout(function() {
//     const data = "This is the fetched data!";
//     callback(data);
//   }, 2000); // Simulating a delay of 2 seconds
// }

// // Callback function to handle the fetched data
// function handleData(data) {
//   console.log("Received data:", data);
// }

// // Call the fetchData function and pass the handleData function as a callback
// fetchData(handleData);
