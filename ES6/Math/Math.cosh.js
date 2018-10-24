/*
 * Name: Math.cosh
 * Syntax: Math.cosh(x)
 * Description: Returns an implementation-dependent approximation to the hyperbolic cosine of x.
 * Spec: https://www.ecma-international.org/ecma-262/6.0/index.html#sec-math.cosh
 *
 */

 // Get the hyperbolic cosine of a positive int
 var x1 = 5;
 var cosh1 = Math.cosh(x1);
 console.log("The hyperbolic cosine of ",x1," is ",cosh1);

 // Get the hyperbolic cosine of a positive float
 var x2 = 5.123;
 var cosh2 = Math.cosh(x2);
 console.log("The hyperbolic cosine of ",x2," is ",cosh2);

 // Get the hyperbolic cosine of a negative int
 var x3 = -5;
 var cosh3 = Math.cosh(x3);
 console.log("The hyperbolic cosine of ",x3," is ",cosh3);

 // Get the hyperbolic cosine of a negative float
 var x4 = -5.123;
 var cosh4 = Math.cosh(x4);
 console.log("The hyperbolic cosine of ",x4," is ",cosh4);

 // Get the hyperbolic cosine of Infinity
 var x5 = Infinity;
 var cosh5 = Math.cosh(x5);
 console.log("The hyperbolic cosine of ",x5," is ",cosh5);

 // Get the hyperbolic cosine of zero
 var x6 = 0;
 var cosh6 = Math.cosh(x6);
 console.log("The hyperbolic cosine of ",x6," is ",cosh6);

 // Get the hyperbolic cosine of a stringified poisitive int
 var x7 = '5';
 var cosh7 = Math.cosh(x7);
 console.log("The hyperbolic cosine of ",x7," is ",cosh7);
