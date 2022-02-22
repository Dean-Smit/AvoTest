// Function to imperatively check palindrome

function palindromeCheck(string) {

//Step 1: Transform the string to lowercase and use a regular expression to remove unwanted characters.
    let regex = /[^A-Za-z0-9]/g;
    string = string.toLowerCase().replace(regex, '');

//Step 2: Use for loop to iterate through string comparing first charcater with last character, then second
//        with second last until the midpoint of the string is reached. 
    let length = string.length;
    for (let i = 0; i < length/2; i++) {
      if (string[i] !== string[length - 1 - i]) {

//Exit the for loop and return "No" if characters do not match.
          return "No";
      }
    }

//If the for loop is not exited prematurely, the loop finishes and "Yes" is returned, indicating a palindrome
    return "Yes";
   }

// Example displaying returned values for palindrome and non palindrome
   console.log(palindromeCheck("racecar"));
   console.log(palindromeCheck("A racecar"));