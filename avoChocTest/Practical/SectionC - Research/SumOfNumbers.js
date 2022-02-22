const fs = require('fs');

//Simple for loop function to sum all numbers in array
function sum(arr) {
  let total = 0;

    for (let i = 0; i < arr.length; i++) {
      total += arr[i];
    }
    return total
}

//Read in data from CSV file, run sum function and log result
fs.readFile('researchlv1.csv', 'utf8', function (_err, data) {
    const stringArray = data.split(/\r?\n/);
    const numbersArray = [];
        for (let i = 0; i < stringArray.length; i++) {
          numbersArray.push(parseInt(stringArray[i]));
        }
//Display result in console
    console.log(sum(numbersArray));

  });