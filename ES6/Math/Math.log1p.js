/*
 * Name: Math.log1p
 * Syntax: Math.log1p(x)
 * Description: Returns an implementation-dependent approximation to the natural logarithm of 1 + x. The result is computed in a way that is accurate even when the value of x is close to zero.
 * Spec: https://www.ecma-international.org/ecma-262/6.0/index.html#sec-math.log1p
 *
 */


// Natural logarithm of 1 + 0
console.log("The natural logarithm of 1 + 0 is ",Math.log1p(0));

// Natural logarithm of 1 + -1
console.log("The natural logarithm of 1 + -1 is ",Math.log1p(-1));

// Natural logarithm of 1 + 1
console.log("The natural logarithm of 1 + 1 is ",Math.log1p(1));

// Natural logarithm of 1 + 9
console.log("The natural logarithm of 1 + 9 is ",Math.log1p(9));

// Natural logarithm of 1 + 0.5
console.log("The natural logarithm of 1 + 0.5 is ",Math.log1p(0.5));

// Natural logarithm of 1 + 100
console.log("The natural logarithm of 1 + 100 is ",Math.log1p(100));
