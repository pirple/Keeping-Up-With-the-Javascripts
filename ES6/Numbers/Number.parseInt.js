/*
 * Name: Number.parseInt
 * Syntax: Number.parseInt(string,[radix])
 * Description 1: The parseInt function produces an integer value dictated by interpretation of the contents of the string argument according to the specified radix. Leading white space in string is ignored. If radix is undefined or 0, it is assumed to be 10 except when the number begins with the code unit pairs 0x or 0X, in which case a radix of 16 is assumed. If radix is 16, the number may also optionally begin with the code unit pairs 0x or 0X.
 * Description 2: The value of the Number.parseInt data property is the same built-in function object that is the value of the parseInt property of the global object defined in 18.2.5.
 * Spec: https://www.ecma-international.org/ecma-262/6.0/index.html#sec-number.parseint
 *
 */


// Successfully get an integer from a string
var foo1 = '5';
var parsedFoo1 = Number.parseInt(foo1);
console.log("parsedFoo1 is: ",parsedFoo1, "and its type is: ",typeof(parsedFoo1));


// Fail to get an integer from a string
var foo2 = 'five';
var parsedFoo2 = Number.parseInt(foo2);
console.log("parsedFoo2 is: ",parsedFoo2, "and its type is: ",typeof(parsedFoo2));


// Successfully get an integer from a float
var foo3 = 5.678;
var parsedFoo3 = Number.parseInt(foo3);
console.log("parsedFoo3 is: ",parsedFoo3, "and its type is: ",typeof(parsedFoo3));


// Fail to get an integer from Infinity
var foo4 = Infinity;
var parsedFoo4 = Number.parseInt(foo4);
console.log("parsedFoo4 is: ",parsedFoo4, "and its type is: ",typeof(parsedFoo4));


// Successfully get an integer from a string, with a different radix (base 8)
var foo5 = '400';
var parsedFoo5 = Number.parseInt(foo5,8);
console.log("parsedFoo5 is: ",parsedFoo5, "and its type is: ",typeof(parsedFoo5));
