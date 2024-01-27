// Using Fetch to make a GET request
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => {
    // Check if the request was successful (status code 200 OK)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the JSON in the response
    return response.json();
  })
  .then(data => {
    // Handle the data from the response
    console.log(data);
  })
  .catch(error => {
    // Handle errors that may occur during the fetch operation
    console.error('Fetch error:', error);
  });