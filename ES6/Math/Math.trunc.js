/*
 * Name: Math.trunc
 * Syntax: Math.trunc(x)
 * Description: Returns the integral part of the number x, removing any fractional digits. If x is already an integer, the result is x.
 * Spec: https://www.ecma-international.org/ecma-262/6.0/index.html#sec-math.trunc
 *
 */


// Truncate 5.5
console.log("The truncated version of 5.5 is ",Math.trunc(5.5));

// Truncate Pi
console.log("The truncated version of Pi is ",Math.trunc(Math.PI));

// Truncate 1/3
console.log("The truncated version of 1/3 is ",Math.trunc(1/3));

// Truncate -123.4
console.log("The truncated version of -123.4 is ",Math.trunc(-123.4));

// Truncate Infinity
console.log("The truncated version of Infinity is ",Math.trunc(Infinity));

// Truncate a string
console.log("The truncated version of a string ('5.5') is ",Math.trunc('5.5'));

// Truncate 5
console.log("The truncated version of 5 is ",Math.trunc(5));
