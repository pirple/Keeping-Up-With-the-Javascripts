/*
 * Name: Number.MIN_SAFE_INTEGER
 * Description: The value of Number.MIN_SAFE_INTEGER is the smallest integer n such that n and n − 1 are both exactly representable as a Number value. The value of Number.MIN_SAFE_INTEGER is −9007199254740991 (−(253−1)).
 * Spec: https://www.ecma-international.org/ecma-262/6.0/index.html#sec-number.min_safe_integer
 *
 */

 // Log the value
 console.log("The min safe integer is: ",Number.MIN_SAFE_INTEGER);

 // Try to subtract 1 from the value
 console.log("1 subtracted from the min safe integer is: ",Number.MIN_SAFE_INTEGER - 1);

 // Try to subtract 2 from the value
 console.log("2 subtracted from the min safe integer is: ",Number.MIN_SAFE_INTEGER - 2);

 // Compare these two values
 // Note: Your mileage may vary, not all systems are the same
 console.log("Do 1+MAX_SAFE_INTEGER and 2+MAX_SAFE_INTEGER have the same result?  ",Number.MIN_SAFE_INTEGER - 1 === Number.MIN_SAFE_INTEGER - 2);
