/**
 * WOD for 10/8/15
 * Created by brianjyriel on 10/8/15.
 */

/**
 * Returns the largest prime factor of the passed number.
 * @param num
 */

/* exports primeFactors, factors, divider */

function primeFactors(num) {
  //two variables
  var factors = []; //empty array!
  var divider = 2;

  while(num > 1) {
    while( (num % divider) === 0 ) {
      factors.push(divider);
      num /= divider;
    }
    divider += 1;
  }
  console.log(factors);
  console.log(factors[factors.length - 1]);

};


//Function call. Input designated number
//primeFactors(600851475143);