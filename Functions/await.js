// Function to fetch data from the API
async function fetchPosts() {
  const url = 'https://jsonplaceholder.typicode.com/posts';

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching posts:', error.message);
    return null;
  }
}

// Function to display the fetched posts
async function displayPosts() {
  const posts = await fetchPosts();
  if (posts) {
    console.log('Fetched posts:', posts);
  } else {
    console.log('Failed to fetch posts.');
  }
}

// Call the displayPosts function to start the process
displayPosts();