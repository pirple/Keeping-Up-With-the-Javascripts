/*
 * Name: Math.hypot
 * Syntax: Math.hypot(value1 ,value2,...values)
 * Description: Returns an implementation-dependent approximation of the square root of the sum of squares of its arguments.
 * Spec: https://www.ecma-international.org/ecma-262/6.0/index.html#sec-math.hypot
 *
 */


// 30 - 60 - 90 triangle
var legA1 = 5;
var legB1 = legA1 * Math.sqrt(3);
var hyp1 = Math.hypot(legA1,legB1);
console.log("If leg A is ",legA1," and leg B is ",legB1," then the hypotenuse is ",hyp1);

// 3 - 4 - 5 triangle
var legA2 = 3;
var legB2 = 4;
var hyp2 = Math.hypot(legA2,legB2);
console.log("If leg A is ",legA2," and leg B is ",legB2," then the hypotenuse is ",hyp2);

// 5 - 12 - 13 triangle
var legA3 = 5;
var legB3 = 12;
var hyp3 = Math.hypot(legA3,legB3);
console.log("If leg A is ",legA3," and leg B is ",legB3," then the hypotenuse is ",hyp3);

// 45 - 45 - 90 triangle
var legA4 = 1;
var legB4 = 1;
var hyp4 = Math.hypot(legA4,legB4);
console.log("If leg A is ",legA4," and leg B is ",legB4," then the hypotenuse is ",hyp4);
