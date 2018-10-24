/*
 * Name: Math.cbrt
 * Syntax: Math.cbrt(x)
 * Description: Returns an implementation-dependent approximation to the cube root of x.
 * Spec: https://www.ecma-international.org/ecma-262/6.0/index.html#sec-math.cbrt
 *
 */

 // The cube root of 27
console.log("The cube root of 27 is ",Math.cbrt(27));

 // The cube root of 8
console.log("The cube root of 8 is ",Math.cbrt(8));

// The cube root of a float
console.log("The cube root of 27.5 is ",Math.cbrt(27.5));

// The cube root of Infinity
console.log("The cube root of Infinity is ",Math.cbrt(Infinity));

// The cube root of zero
console.log("The cube root of zero is ",Math.cbrt(0));

// The cube root of a prime number
console.log("The cube root of a prime number (7) is ",Math.cbrt(7));

// The cube root of a string
console.log("The cube root of a string number (27) is ",Math.cbrt('27'));
