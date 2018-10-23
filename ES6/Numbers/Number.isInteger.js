/*
 * Name: Number.isInteger
 * Syntax: Number.isInteger(number)
 * Description: When the Number.isInteger is called with one argument number, the following steps are taken: If Type(number) is not Number, return false. If number is NaN, +∞, or −∞, return false. Let integer be ToInteger(number). If integer is not equal to number, return false. Otherwise, return true.
 * Spec: https://www.ecma-international.org/ecma-262/6.0/index.html#sec-number.isinteger
 *
 */

 // Check if integer is integer
 var foo1 = 6;
 var isInteger1 = Number.isInteger(foo1);
 console.log("For the value", foo1, "isInteger evaluates to: ",isInteger1);

 // Check if float is integer
 var foo2 = 12.345;
 var isInteger2 = Number.isInteger(foo2);
 console.log("For the value", foo2, "isInteger evaluates to: ",isInteger2);

 // Check if rounded float is integer
 var foo3 = Math.round(10.5);
 var isInteger3 = Number.isInteger(foo3);
 console.log("For the value", foo3, "isInteger evaluates to: ",isInteger3);

 // Check if inifity is integer
 var foo4 = Infinity;
 var isInteger4 = Number.isInteger(foo4);
 console.log("For the value", foo4, "isInteger evaluates to: ",isInteger4);

 // Check if NaN is integer
 var foo5 = NaN;
 var isInteger5 = Number.isInteger(foo5);
 console.log("For the value", foo5, "isInteger evaluates to: ",isInteger5);

 // Check if a string is integer
 var foo6 = '9';
 var isInteger6 = Number.isInteger(foo6);
 console.log("For the value", foo6, "isInteger evaluates to: ",isInteger6);
