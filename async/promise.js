// Function that returns a Promise //asyn
function fetchData() {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous operation (e.g., fetching data from an API)
    setTimeout(() => {
      const data = { message: "Data successfully fetched!" };
      // Simulate a successful response
      resolve(data);
      // Simulate an error
      reject(new Error("Failed to fetch data!"));
    }, 2000);
  });
}

// Using the Promise //await
fetchData()
  .then((result) => {
    console.log(result.message);
  })
  .catch((error) => {
    console.error(error.message);
  })
  .finally(() => {
    console.log("Promise completed, regardless of success or failure.");
  });