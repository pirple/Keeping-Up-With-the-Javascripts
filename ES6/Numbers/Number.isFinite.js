/*
 * Name: Number.isFinite
 * Syntax: Number.isFinite(number)
 * Description: When the Number.isFinite is called with one argument number, the following steps are taken: If Type(number) is not Number, return false. If number is NaN, +∞, or −∞, return false. Otherwise, return true.
 * Spec: https://www.ecma-international.org/ecma-262/6.0/index.html#sec-number.isfinite
 *
 */

 // Check if integer is finite
 var foo1 = 9;
 var isFinite1 = Number.isFinite(foo1);
 console.log("For the value", foo1, "isFinite evaluates to: ",isFinite1);

 // Check if float is finite
 var foo2 = 9.123;
 var isFinite2 = Number.isFinite(foo2);
 console.log("For the value", foo2, "isFinite evaluates to: ",isFinite2);

 // Check if irrational expression is finite
 var foo3 = Math.sqrt(2);
 var isFinite3 = Number.isFinite(foo3);
 console.log("For the value", foo3, "isFinite evaluates to: ",isFinite3);

 // Check if inifity is finite
 var foo4 = Infinity;
 var isFinite4 = Number.isFinite(foo4);
 console.log("For the value", foo4, "isFinite evaluates to: ",isFinite4);

 // Check if NaN is finite
 var foo5 = NaN;
 var isFinite5 = Number.isFinite(foo5);
 console.log("For the value", foo5, "isFinite evaluates to: ",isFinite5);

 // Check if a string is finite
 var foo6 = '9';
 var isFinite6 = Number.isFinite(foo6);
 console.log("For the value", foo6, "isFinite evaluates to: ",isFinite6);
