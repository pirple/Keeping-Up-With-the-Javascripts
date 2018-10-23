/*
 * Name: Number.isNaN
 * Syntax: Number.isNaN(number)
 * Description: When the Number.isNaN is called with one argument number, the following steps are taken: If Type(number) is not Number, return false. If number is NaN, return true. Otherwise, return false. NOTE This function differs from the global isNaN function (18.2.3) is that it does not convert its argument to a Number before determining whether it is NaN.
 * Spec: https://www.ecma-international.org/ecma-262/6.0/index.html#sec-number.isnan
 *
 */

// Check if integer is NaN
var foo1 = 9;
var isNaN1 = Number.isNaN(foo1);
console.log("For the value", foo1, "isNaN evaluates to: ",isNaN1);

// Check if float is NaN
var foo2 = 9.123;
var isNaN2 = Number.isNaN(foo2);
console.log("For the value", foo2, "isNaN evaluates to: ",isNaN2);

// Check if irrational expression is NaN
var foo3 = Math.sqrt(2);
var isNaN3 = Number.isNaN(foo3);
console.log("For the value", foo3, "isNaN evaluates to: ",isNaN3);

// Check if inifity is NaN
var foo4 = Infinity;
var isNaN4 = Number.isNaN(foo4);
console.log("For the value", foo4, "isNaN evaluates to: ",isNaN4);

// Check if NaN is NaN
var foo5 = NaN;
var isNaN5 = Number.isNaN(foo5);
console.log("For the value", foo5, "isNaN evaluates to: ",isNaN5);

// Check if a string is NaN
var foo6 = 'NaN';
var isNaN6 = Number.isNaN(foo6);
console.log("For the value", foo6, "isNaN evaluates to: ",isNaN6);

// Use the global isNan function to check if a string is NaN
// Note: This is the difference between the global version and the Number-scoped version of this function
var foo7 = 'NaN';
var isNaN7 = isNaN(foo7);
console.log("For the value", foo7, "(using the global function), isNaN evaluates to: ",isNaN7);
