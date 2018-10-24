/*
 * Name: Math.sinh
 * Syntax: Math.sinh(x)
 * Description: Returns an implementation-dependent approximation to the hyperbolic sine of x.
 * Spec: https://www.ecma-international.org/ecma-262/6.0/index.html#sec-math.sinh
 *
 */

 // Get the hyperbolic sine of a positive int
 var x1 = 5;
 var sinh1 = Math.sinh(x1);
 console.log("The hyperbolic sine of ",x1," is ",sinh1);

 // Get the hyperbolic sine of a positive float
 var x2 = 5.123;
 var sinh2 = Math.sinh(x2);
 console.log("The hyperbolic sine of ",x2," is ",sinh2);

 // Get the hyperbolic sine of a negative int
 var x3 = -5;
 var sinh3 = Math.sinh(x3);
 console.log("The hyperbolic sine of ",x3," is ",sinh3);

 // Get the hyperbolic sine of a negative float
 var x4 = -5.123;
 var sinh4 = Math.sinh(x4);
 console.log("The hyperbolic sine of ",x4," is ",sinh4);

 // Get the hyperbolic sine of Infinity
 var x5 = Infinity;
 var sinh5 = Math.sinh(x5);
 console.log("The hyperbolic sine of ",x5," is ",sinh5);

 // Get the hyperbolic sine of zero
 var x6 = 0;
 var sinh6 = Math.sinh(x6);
 console.log("The hyperbolic sine of ",x6," is ",sinh6);

 // Get the hyperbolic sine of a stringified poisitive int
 var x7 = '5';
 var sinh7 = Math.sinh(x7);
 console.log("The hyperbolic sine of ",x7," is ",sinh7);
