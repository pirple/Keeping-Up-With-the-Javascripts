/*
 * Name: Math.tanh
 * Syntax: Math.tanh(x)
 * Description: Returns an implementation-dependent approximation to the hyperbolic tangent of x.
 * Spec: https://www.ecma-international.org/ecma-262/6.0/index.html#sec-math.tanh
 *
 */

 // Get the hyperbolic tangent of a positive int
 var x1 = 5;
 var tanh1 = Math.tanh(x1);
 console.log("The hyperbolic tangent of ",x1," is ",tanh1);

 // Get the hyperbolic tangent of a positive float
 var x2 = 5.123;
 var tanh2 = Math.tanh(x2);
 console.log("The hyperbolic tangent of ",x2," is ",tanh2);

 // Get the hyperbolic tangent of a negative int
 var x3 = -5;
 var tanh3 = Math.tanh(x3);
 console.log("The hyperbolic tangent of ",x3," is ",tanh3);

 // Get the hyperbolic tangent of a negative float
 var x4 = -5.123;
 var tanh4 = Math.tanh(x4);
 console.log("The hyperbolic tangent of ",x4," is ",tanh4);

 // Get the hyperbolic tangent of Infinity
 var x5 = Infinity;
 var tanh5 = Math.tanh(x5);
 console.log("The hyperbolic tangent of ",x5," is ",tanh5);

 // Get the hyperbolic tangent of zero
 var x6 = 0;
 var tanh6 = Math.tanh(x6);
 console.log("The hyperbolic tangent of ",x6," is ",tanh6);

 // Get the hyperbolic tangent of a stringified poisitive int
 var x7 = '5';
 var tanh7 = Math.tanh(x7);
 console.log("The hyperbolic tangent of ",x7," is ",tanh7);
