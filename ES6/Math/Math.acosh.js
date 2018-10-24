/*
 * Name: Math.acosh
 * Syntax: Math.acosh(x)
 * Description: Returns an implementation-dependent approximation to the inverse hyperbolic cosine of x.
 * Spec: https://www.ecma-international.org/ecma-262/6.0/index.html#sec-math.acosh
 *
 */

// Get the inverse hyperbolic cosine of a positive int
var x1 = 5;
var acosh1 = Math.acosh(x1);
console.log("The inverse hyperbolic cosine of ",x1," is ",acosh1);

// Get the inverse hyperbolic cosine of a positive float
var x2 = 5.123;
var acosh2 = Math.acosh(x2);
console.log("The inverse hyperbolic cosine of ",x2," is ",acosh2);

// Get the inverse hyperbolic cosine of a negative int
var x3 = -5;
var acosh3 = Math.acosh(x3);
console.log("The inverse hyperbolic cosine of ",x3," is ",acosh3);

// Get the inverse hyperbolic cosine of a negative float
var x4 = -5.123;
var acosh4 = Math.acosh(x4);
console.log("The inverse hyperbolic cosine of ",x4," is ",acosh4);

// Get the inverse hyperbolic cosine of Infinity
var x5 = Infinity;
var acosh5 = Math.acosh(x5);
console.log("The inverse hyperbolic cosine of ",x5," is ",acosh5);

// Get the inverse hyperbolic cosine of zero
var x6 = 0;
var acosh6 = Math.acosh(x6);
console.log("The inverse hyperbolic cosine of ",x6," is ",acosh6);

// Get the inverse hyperbolic cosine of a stringified poisitive int
var x7 = '5';
var acosh7 = Math.acosh(x7);
console.log("The inverse hyperbolic cosine of ",x7," is ",acosh7);
