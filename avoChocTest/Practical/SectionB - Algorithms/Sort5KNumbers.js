const fs = require('fs');


//Function to sort array using quick sort method
function quickSort(origArray) {

  //guard clause to return same array if array has only onw element or fewer.
	if (origArray.length <= 1) { 
		return origArray;
	} else {

		const left = [];
		const right = [];
		const newArray = [];
		const pivot = origArray.pop();
		const length = origArray.length;

		for (let i = 0; i < length; i++) {
			if (origArray[i] <= pivot) {
				left.push(origArray[i]);
			} else {
				right.push(origArray[i]);
			}
		}

		return newArray.concat(quickSort(left), pivot, quickSort(right));
	}
}

//Read in CSV file and sort, then display in console
fs.readFile('algorithms1.csv', 'utf8', function (_err, data) {
  const dataArray = quickSort(data.split(/\r?\n/));
  console.log(dataArray);
});