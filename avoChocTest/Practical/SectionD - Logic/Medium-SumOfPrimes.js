//Function to check if number is prime
//Time complexity: O(sqrt(n))
//Space complexity: O(1)

const isPrime = val => {
  for(let i = 2, s = Math.sqrt(val); i <= s; i++)
      if(val % i === 0) return false; 
  return val > 1;
}

//Function to sum all primes below input value
const sumPrimes = num => {
    let sum = 0;
  
    //loop through all numbers from 2 to input value
  
    for(let i = 2; i <= num; i++){   
  
      //sum only prime numbers, skip all others
      if (isPrime(i)) {
        sum += i;
      }
    }
    return sum;
  }
  
  console.log(sumPrimes(2000000));


