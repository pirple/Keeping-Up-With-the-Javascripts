/*
 * Name: Number.isSafeInteger
 * Syntax: Number.isSafeInteger(number)
 * Description: When the Number.isSafeInteger is called with one argument number, the following steps are taken: If Type(number) is not Number, return false. If number is NaN, +∞, or −∞, return false. Let integer be ToInteger(number). If integer is not equal to number, return false. If abs(integer) ≤ 253−1, return true. Otherwise, return false.
 * Spec: https://www.ecma-international.org/ecma-262/6.0/index.html#sec-number.issafeinteger
 *
 */

  // Check if integer is safe integer
  var foo1 = 6;
  var isSafeInteger1 = Number.isSafeInteger(foo1);
  console.log("For the value", foo1, "isSafeInteger evaluates to: ",isSafeInteger1);

  // Check if float is safe integer
  var foo2 = 12.345;
  var isSafeInteger2 = Number.isSafeInteger(foo2);
  console.log("For the value", foo2, "isSafeInteger evaluates to: ",isSafeInteger2);

  // Check if rounded float is safe integer
  var foo3 = Math.round(10.5);
  var isSafeInteger3 = Number.isSafeInteger(foo3);
  console.log("For the value", foo3, "isSafeInteger evaluates to: ",isSafeInteger3);

  // Check if inifity is safe integer
  var foo4 = Infinity;
  var isSafeInteger4 = Number.isSafeInteger(foo4);
  console.log("For the value", foo4, "isSafeInteger evaluates to: ",isSafeInteger4);

  // Check if super-large integer is safe integer
  var foo5 = Math.pow(99999, 99999999);
  var isSafeInteger5 = Number.isSafeInteger(foo5);
  console.log("For the value", foo5, "isSafeInteger evaluates to: ",isSafeInteger5);

  // Check if a string is integer
  var foo6 = '9';
  var isSafeInteger6 = Number.isSafeInteger(foo6);
  console.log("For the value", foo6, "isSafeInteger evaluates to: ",isSafeInteger6);
