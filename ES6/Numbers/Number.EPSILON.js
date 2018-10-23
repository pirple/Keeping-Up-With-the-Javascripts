
/*
 * Name: Number.EPSILON
 * Description: The value of Number.EPSILON is the difference between 1 and the smallest value greater than 1 that is representable as a Number value, which is approximately 2.2204460492503130808472633361816 x 10‍−‍16.
 * Spec: https://www.ecma-international.org/ecma-262/6.0/index.html#sec-number.epsilon
 *
 */


// Log the value of 0.2 + 0.3 - 0.3
console.log("0.2 + 0.3 - 0.3 is: ",0.2 + 0.1 - 0.3);

// Does 0.2 + 0.3 - 0.3 equal zero?
console.log("Does 0.2 + 0.3 - 0.3 equal zero?", 0.2 + 0.1 - 0.3 === 0);

// Use epsilon to test the equality of 0.2 + 0.3 - 0.3 to zero
console.log("Does 0.2 + 0.3 - 0.3 equate to less than epsilon?", 0.2 + 0.1 - 0.3 < Number.EPSILON);

 // Log the value of 0.4 - 0.1
console.log("0.4 - 0.1 is: ",0.4 - 0.1);

// Does 0.4 - 0.1 equal 0.3?
console.log("Does 0.4 - 0.1 equal 0.3?", 0.4 - 0.1 === 0.3);

// Use epsilon to test the equality of 0.4 - 0.1 to 0.3
console.log("Does 0.4 - 0.1 equate to within epsilon range of 0.3?",  ((0.4 - 0.1) <  (0.3 + Number.EPSILON)) && ((0.4 - 0.1) > (0.3 - Number.EPSILON)));

// Log the value of 0.4 + 0.5 - 0.9
console.log("0.4 + 0.5 - 0.9 is: ",0.4 + 0.5 - 0.9);

// Does 0.4 + 0.5 - 0.9 equal 0?
console.log("Does 0.4 + 0.5 - 0.9 equal zero?", 0.4 + 0.5 - 0.9 === 0);

// Use epsilon to test the equality of 0.4 + 0.5 - 0.9 to zero
console.log("Does 0.4 + 0.5 - 0.9 equate to less than epsilon?", 0.4 + 0.5 - 0.9 < Number.EPSILON)
