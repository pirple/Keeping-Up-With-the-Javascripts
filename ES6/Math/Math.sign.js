/*
 * Name: Math.sign
 * Syntax: Math.sign(x)
 * Description: Returns the sign of the x, indicating whether x is positive, negative or zero.
 * Spec: https://www.ecma-international.org/ecma-262/6.0/index.html#sec-math.sign
 *
 */


// The sign of 5
console.log("The sign of 5 is ",Math.sign(5));

// The sign of -5
console.log("The sign of -5 is ",Math.sign(-5));

// The sign of a string ('5')
console.log("The sign of a string ('5') is ",Math.sign('5'));

// The sign of a negative string ('-5')
console.log("The sign of a string ('-5') is ",Math.sign('-5'));

// The sign of false
console.log("The sign of false is ",Math.sign(false));

// The sign of +0
console.log("The sign of +0 is ",Math.sign(+0));

// The sign of -0
// Careful with this one, your console may drop the negative sign
console.log("The sign of -0 is ",Math.sign(-0));


// The sign of Infinity
console.log("The sign of Infinity is ",Math.sign(Infinity));

// The sign of negative Infinity
console.log("The sign of negative Infinity is ",Math.sign(-Infinity));
