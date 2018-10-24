/*
 * Name: Math.imul
 * Syntax: Math.imul(x,y)
 * Description: When the Math.imul is called with arguments x and y the following steps are taken: Let a be ToUint32(x). Let b be ToUint32(y). Let product be (a × b) modulo 232. If product ≥ 231, return product − 232, otherwise return product.
 * Spec: https://www.ecma-international.org/ecma-262/6.0/index.html#sec-math.imul
 *
 */

// 32 bit multiplication of 5 and 2
console.log("The 32 bit multiplication of 5 and 2 is ",Math.imul(5,2)," instead of ",5*2);

// 32 bit multiplication of 1 and 1
console.log("The 32 bit multiplication of 1 and 1 is ",Math.imul(1,1)," instead of ",1*1);

// 32 bit multiplication of 100 and 555
console.log("The 32 bit multiplication of 100 and 555 is ",Math.imul(100,555)," instead of ",100*555);

// 32 bit multiplication of 100.1 and 555
console.log("The 32 bit multiplication of 100.1 and 555 is ",Math.imul(100.1,555)," instead of ",100.1*555);

// 32 bit multiplication of 1/3 and 3
console.log("The 32 bit multiplication of 1/3 and 3 is ",Math.imul(1/3,3)," instead of ",(1/3)*3);

// 32 bit multiplication of 0.5 and 2
console.log("The 32 bit multiplication of 0.5 and 2 is ",Math.imul(0.5,2)," instead of ",05*2);

// 32 bit multiplication of 1.234 and 10
console.log("The 32 bit multiplication of 1.234 and 10 is ",Math.imul(1.234,10)," instead of ",1.234*10);

// 32 bit multiplication of 1 and 1
console.log("The 32 bit multiplication of 1 and 1 is ",Math.imul(1,1)," instead of ",1*1);
