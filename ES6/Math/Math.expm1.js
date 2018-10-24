/*
 * Name: Math.expm1
 * Syntax: Math.expm1(x)
 * Description: Returns an implementation-dependent approximation to subtracting 1 from the exponential function of x (e raised to the power of x, where e is the base of the natural logarithms). The result is computed in a way that is accurate even when the value of x is close 0.
 * Spec: https://www.ecma-international.org/ecma-262/6.0/index.html#sec-math.expm1
 *
 */

// Raise e to the power of 1 before subtracting 1
console.log("E raised to the power of 1, minus 1, equals ",Math.expm1(1));

// Raise e to the power of 10 before subtracting 1
console.log("E raised to the power of 10, minus 1, equals ",Math.expm1(10));

// Raise e to the power of 2 before subtracting 1
console.log("E raised to the power of 2, minus 1, equals ",Math.expm1(2));

// Raise e to the power of -5 before subtracting 1
console.log("E raised to the power of -5, minus 1, equals ",Math.expm1(-5));

// Raise e to the power of zero before subtracting 1
console.log("E raised to the power of 0, minus 1, equals ",Math.expm1(0));

// Raise e to the power of a string (10) before subtracting 1
console.log("E raised to the power of a string ('10'), minus 1, equals ",Math.expm1('10'));

// Raise e to the power of Infinity before subtracting 1
console.log("E raised to the power of Infinity, minus 1, equals ",Math.expm1(Infinity));
