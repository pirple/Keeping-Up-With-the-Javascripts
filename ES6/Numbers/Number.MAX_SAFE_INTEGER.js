/*
 * Name: Number.MAX_SAFE_INTEGER
 * Description: The value of Number.MAX_SAFE_INTEGER is the largest integer n such that n and n + 1 are both exactly representable as a Number value. The value of Number.MAX_SAFE_INTEGER is 9007199254740991 (253−1).
 * Spec: https://www.ecma-international.org/ecma-262/6.0/index.html#sec-number.max_safe_integer
 *
 */

// Log the value
console.log("The max safe integer is: ",Number.MAX_SAFE_INTEGER);

// Try to add 1 to the value
console.log("1 added to the max safe integer is: ",Number.MAX_SAFE_INTEGER + 1);

// Try to add 2 to the value
console.log("2 added from the max safe integer is: ",Number.MAX_SAFE_INTEGER + 2);

// Compare these two values
// Note: Your mileage may vary, not all systems are the same
console.log("Do 1+MAX_SAFE_INTEGER and 2+MAX_SAFE_INTEGER have the same result?  ",Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2);
