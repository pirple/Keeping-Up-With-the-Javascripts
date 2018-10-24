/*
 * Name: Math.clz32
 * Syntax: Math.clz32(x)
 * Description: When Math.clz32 is called with one argument x, the following steps are taken: Let n be ToUint32(x). Let p be the number of leading zero bits in the 32-bit binary representation of n. Return p.
 * Spec: https://www.ecma-international.org/ecma-262/6.0/index.html#sec-math.clz32
 *
 */

 // The leading zeros for 1
console.log("The number of leading zeros for 1 is ",Math.clz32(1));

// The leading zeros for 10
console.log("The number of leading zeros for 10 is ",Math.clz32(10));

// The leading zeros for 2
console.log("The number of leading zeros for 2 is ",Math.clz32(2));

// The leading zeros for -5
console.log("The number of leading zeros for -5 is ",Math.clz32(-5));

// The leading zeros for zero
console.log("The number of leading zeros for zero is ",Math.clz32(0));

// The leading zeros for a string
console.log("The number of leading zeros for a string ('10') is ",Math.clz32('10'));

// The leading zeros for Infinity
console.log("The number of leading zeros for Infinity is ",Math.clz32(Infinity));
