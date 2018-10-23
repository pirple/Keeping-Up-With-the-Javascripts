/*
 * Name: Number.parseFloat
 * Syntax: Number.parseFloat(string)
 * Description 1: The parseFloat function produces a Number value dictated by interpretation of the contents of the string argument as a decimal literal.
 * Description 2: The value of the Number.parseFloat data property is the same built-in function object that is the value of the parseFloat property of the global object defined in 18.2.4.
 * Spec: https://www.ecma-international.org/ecma-262/6.0/index.html#sec-number.parsefloat
 *
 */

 // Successfully get a float from a string
 var foo1 = '5.123';
 var parsedFoo1 = Number.parseFloat(foo1);
 console.log("parsedFoo1 is: ",parsedFoo1, "and its type is: ",typeof(parsedFoo1));


 // Fail to get a float from a string
 var foo2 = 'five-point-five-five';
 var parsedFoo2 = Number.parseFloat(foo2);
 console.log("parsedFoo2 is: ",parsedFoo2, "and its type is: ",typeof(parsedFoo2));


 // Successfully an integer from an integer
 var foo3 = 5;
 var parsedFoo3 = Number.parseFloat(foo3);
 console.log("parsedFoo3 is: ",parsedFoo3, "and its type is: ",typeof(parsedFoo3));


 // Successfully get Infinity from Infinity
 var foo4 = Infinity;
 var parsedFoo4 = Number.parseFloat(foo4);
 console.log("parsedFoo4 is: ",parsedFoo4, "and its type is: ",typeof(parsedFoo4));
