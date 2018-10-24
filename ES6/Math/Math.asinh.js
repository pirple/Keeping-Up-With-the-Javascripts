/*
 * Name: Math.asinh
 * Syntax: Math.asinh(x)
 * Description: Returns an implementation-dependent approximation to the inverse inverse hyperbolic sine of x.
 * Spec: https://www.ecma-international.org/ecma-262/6.0/index.html#sec-math.asinh
 *
 */

 // Get the inverse hyperbolic sine of a positive int
 var x1 = 5;
 var asinh1 = Math.asinh(x1);
 console.log("The inverse hyperbolic sine of ",x1," is ",asinh1);

 // Get the inverse hyperbolic sine of a positive float
 var x2 = 5.123;
 var asinh2 = Math.asinh(x2);
 console.log("The inverse hyperbolic sine of ",x2," is ",asinh2);

 // Get the inverse hyperbolic sine of a negative int
 var x3 = -5;
 var asinh3 = Math.asinh(x3);
 console.log("The inverse hyperbolic sine of ",x3," is ",asinh3);

 // Get the inverse hyperbolic sine of a negative float
 var x4 = -5.123;
 var asinh4 = Math.asinh(x4);
 console.log("The inverse hyperbolic sine of ",x4," is ",asinh4);

 // Get the inverse hyperbolic sine of Infinity
 var x5 = Infinity;
 var asinh5 = Math.asinh(x5);
 console.log("The inverse hyperbolic sine of ",x5," is ",asinh5);

 // Get the inverse hyperbolic sine of zero
 var x6 = 0;
 var asinh6 = Math.asinh(x6);
 console.log("The inverse hyperbolic sine of ",x6," is ",asinh6);

 // Get the inverse hyperbolic sine of a stringified poisitive int
 var x7 = '5';
 var asinh7 = Math.asinh(x7);
 console.log("The inverse hyperbolic sine of ",x7," is ",asinh7);
