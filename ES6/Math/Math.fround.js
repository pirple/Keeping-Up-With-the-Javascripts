/*
 * Name: Math.fround
 * Syntax: Math.fround(x)
 * Description: When Math.fround is called with argument x the following steps are taken: If x is NaN, return NaN. If x is one of +0, −0, +∞, −∞, return x. Let x32 be the result of converting x to a value in IEEE 754-2008 binary32 format using roundTiesToEven. Let x64 be the result of converting x32 to a value in IEEE 754-2008 binary64 format. Return the ECMAScript Number value corresponding to x64.
 * Spec: https://www.ecma-international.org/ecma-262/6.0/index.html#sec-math.fround
 *
 */

// 32 bit representation of 1
console.log("The 32 bit representation of 1 is ",Math.fround(1));

// 32 bit representation of 1.234
console.log("The 32 bit representation of 1.234 is ",Math.fround(1.234));

// 32 bit representation of Pi
console.log("The 32 bit representation of Pi is ",Math.fround(Math.PI));

// 32 bit representation of the square root of 10
console.log("The 32 bit representation of the square root of 10 is ",Math.fround(Math.sqrt(10)));

// 32 bit representation of 1/3
console.log("The 32 bit representation of 1/3 is ",Math.fround(1/3));

// 32 bit representation of zero
console.log("The 32 bit representation of zero is ",Math.fround(0));

// 32 bit representation of a string
console.log("The 32 bit representation of a string ('1.234') is ",Math.fround('1.234'));

// 32 bit representation of Infinity
console.log("The 32 bit representation of Infinity is ",Math.fround(Infinity));
