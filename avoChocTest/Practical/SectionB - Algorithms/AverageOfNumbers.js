//Function to calculate the average of a given array of numbers
const average = arr => arr.reduce((a,b) => a + b, 0) / arr.length;

//Test results with multiple arrays
console.log(average([99, 45, 26, 7, 11, 122, 22]));

console.log(average([99, 45, 26, 7, 11, 122]));

console.log(average([99, 45, 26, 7, 11]));