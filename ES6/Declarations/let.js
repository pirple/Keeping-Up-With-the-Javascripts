/*
 * Name: let
 * Spec: https://www.ecma-international.org/ecma-262/6.0/#sec-let-and-const-declarations
 *
 */


// Declare variables but don't assign them a value;
let let1;
var var1;
console.log("The declared but unassigned var1: ",var1, "has a type of: ",typeof(var1));
console.log("The declared but unassigned let1: ",let1, "has a type of: ",typeof(let1));


// Declare at higher scope and use at lower scope
let let2 = 1;
console.log("This is let2 before the if-statement ",let2);
if('a' === 'a'){
  console.log("This is let2 within the if-statement ",let2);
}
console.log("This is let2 after the if-statement ",let2);


// Declare at higher scope and modify at lower scope, but use again at original scope unchanged
let let3 = 1;
console.log("This is let3 before the if-statement ",let3);
if('a' === 'a'){
  let let3 = 2;
  console.log("This is let3 within the if-statement ",let3);
}
console.log("This is let3 after the if-statement ",let3);


// Declare at inner scope and try to use again at outer scope
console.log("This is let4 before the if-statement ",typeof(let4));
if('a' === 'a'){
  let let4 = 2;
  console.log("This is let4 within the if-statement ",let4);
}
console.log("This is let4 after the if-statement ",typeof(let4));


/*
 * ATTENTION / WARNING
 * The following 2 examples will only work properly within a browser window (not server-side)
 *
 */


// Attempt to use 'this' at global scope
let let5 = 1;
var var2 = 1;
console.log("This is the value of this.let5", typeof(this.let5));
console.log("This is the value of this.var2",this.var2);

// Attempt to use variables on the window opbject
let let6 = 1;
var var3 = 1;
console.log("This is the value of window.let6", typeof(window.let6));
console.log("This is the value of window.var3", window.var3);


/*
 * ATTENTION / WARNING
 * Some of the following examples should throw an error
 *
 */

// Try to re-declare the same variables (from the top of this page), with values
var var1 = 0;
console.log("This is the var1 with a value assigned to it ",var1);

// Expect an error at this point. We can't "catch" this error because the try/catch statement introduces a new block level
let let1 = 0;

// Try to modify a let at the same level it was declared, with keyword
let let7 = 1;
let let7 = 2;

// Try to modify a let at the same level it was declared, omitting keyword
let let8 = 1;
let8 = 2;
console.log("This is the value of let8 now",let8);

// Try to access a let that hasn't been declared yet but is declared below
console.log("This is the type of let9 before we declare it",typeof(let9));
let let9 = 1;
