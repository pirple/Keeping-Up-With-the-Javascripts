/*
 * Name: Math.atanh
 * Syntax: Math.atanh(x)
 * Description: Returns an implementation-dependent approximation to the inverse hyperbolic tangent of x.
 * Spec: https://www.ecma-international.org/ecma-262/6.0/index.html#sec-math.atanh
 *
 */

 // Get the inverse hyperbolic tangent of a positive int
 var x1 = 5;
 var atanh1 = Math.atanh(x1);
 console.log("The inverse hyperbolic tangent of ",x1," is ",atanh1);

 // Get the inverse hyperbolic tangent of a positive float
 var x2 = 5.123;
 var atanh2 = Math.atanh(x2);
 console.log("The inverse hyperbolic tangent of ",x2," is ",atanh2);

 // Get the inverse hyperbolic tangent of a negative int
 var x3 = -5;
 var atanh3 = Math.atanh(x3);
 console.log("The inverse hyperbolic tangent of ",x3," is ",atanh3);

 // Get the inverse hyperbolic tangent of a negative float
 var x4 = -5.123;
 var atanh4 = Math.atanh(x4);
 console.log("The inverse hyperbolic tangent of ",x4," is ",atanh4);

 // Get the inverse hyperbolic tangent of Infinity
 var x5 = Infinity;
 var atanh5 = Math.atanh(x5);
 console.log("The inverse hyperbolic tangent of ",x5," is ",atanh5);

 // Get the inverse hyperbolic tangent of zero
 var x6 = 0;
 var atanh6 = Math.atanh(x6);
 console.log("The inverse hyperbolic tangent of ",x6," is ",atanh6);

 // Get the inverse hyperbolic tangent of a stringified poisitive int
 var x7 = '5';
 var atanh7 = Math.atanh(x7);
 console.log("The inverse hyperbolic tangent of ",x7," is ",atanh7);
