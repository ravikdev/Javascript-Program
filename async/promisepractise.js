// Function that returns a Promise
function fetchData() {
    return new Promise((resolve, reject) => {
      // Simulating an asynchronous operation (e.g., fetching data from an API)
      setTimeout(() => {
        const success = true; // Change this to simulate success or failure
  
        if (success) {
          resolve("Data fetched successfully!");
        } else {
          reject("Error fetching data");
        }
      }, 2000); // Simulating a 2-second delay
    });
  }
  
  // Using the Promise
  fetchData()
    .then((result) => {
      console.log(result); // Output if the Promise is resolved
    })
    .catch((error) => {
      console.error(error); // Output if the Promise is rejected
    });