//Function to convert base 10 numbers to factoradicals

const convertToFactoradical = val => {

    //Set initial quotient to input value and initialize array variable
    let quotient = val;
    let remainderArray = [];

    //Run loop to obtain list of remainders until quotient reaches 0
    for ( let i = 1; quotient > 0; i++ ) {
        let remainder;
        remainder = quotient % i;
        remainderArray.push(remainder);
        quotient = Math.floor( quotient / i );
    }

    //Remove first element from array (first element will always be zero since we are dividing by 1)
    remainderArray.shift();
    return remainderArray.join(' ');
}

console.log("13 = ", convertToFactoradical(13));
console.log("17 = ", convertToFactoradical(17));
console.log("24 = ", convertToFactoradical(24));