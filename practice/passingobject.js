// Define a function that takes a callback function as a parameter
function calculateArea(callback) {
    console.log("Calculating area...");
    const rectangle = { length: 5, width: 3 };  
    const area = callback(rectangle);
    console.log("Area of the rectangle:", area);
  }

  const obj ={
  // Define an arrow function that will be passed as a callback
    res: calculateRectangleArea = (dimensions) => {
    console.log("Calculating area for rectangle with dimensions:", dimensions);
    const area = dimensions.length * dimensions.width;
    return area; // Return the calculated area
  }
};
  
  calculateArea(obj.res);