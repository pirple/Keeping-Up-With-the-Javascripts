/*
 * Name: const
 * Spec: https://www.ecma-international.org/ecma-262/6.0/#sec-let-and-const-declarations
 *
 * WARNING / ATTENTION
 * 1. Many of the examples in this file will throw an error. Don't try to run this file all at once, run them one by one.
 * 2. A few of the examples (dealing with "this" and "window") will only work properly in a browser, not server-side
 *
 */

// Declare variables but don't assign them a value;
var var1;
console.log("The declared but unassigned var1: ",var1, "has a type of: ",typeof(var1));
const const1; // This should throw an error


// Declare at higher scope and use at lower scope
const const2 = 1;
console.log("This is const2 before the if-statement ",const2);
if('a' === 'a'){
  console.log("This is const2 within the if-statement ",const2);
}
console.log("This is const2 after the if-statement ",const2);


// Declare at higher scope and modify at lower scope, but use again at original scope unchanged
const const3 = 1;
console.log("This is const3 before the if-statement ",const3);
if('a' === 'a'){
  const const3 = 2;
  console.log("This is const3 within the if-statement ",const3);
}
console.log("This is const3 after the if-statement ",const3);


// Try to modify at the same level it was declared, omitting keyword
const const4 = 1;
const4 = 2;


// Try to modify at the same level it was declared, with keyword
const const5 = 1;
const const5 = 2;


// Declare at inner scope and try to use again at outer scope
console.log("This is const6 before the if-statement ",typeof(const6));
if('a' === 'a'){
  const const6 = 2;
  console.log("This is const6 within the if-statement ",const6);
}
console.log("This is const6 after the if-statement ",typeof(const6));


// Declare at inner scope and declare again at outer scope
if('a' === 'a'){
  const const7 = 2;
  console.log("This is const7 within the if-statement ",const7);
}
const const7 = 3;
console.log("This is const7 after the if-statement ",const7);


// Try to access a const that hasn't been declared yet but is declared below
console.log("This is the type of const8 before we declare it",typeof(const8));
const const8 = 1;

// Declare a const object then try to change it to a different object
const const9 = {
  'foo' : 'bar'
};
const9 = {
  'fizz' : 'buzz'
};

// Declare a const object then try to add a property
const const10 = {
  'foo' : 'bar'
};
const10.fizz = 'buzz';
console.log("This is const10 after adding the new property ",const10);

// Declare a const object then try to delete a property
const const11 = {
  'foo' : 'bar'
};
delete const11.foo;
console.log("This is const11 after deleting the foo property ",const11);

// Declare a const array then try to change it to a different array
const const12 = ['foo','bar'];
const12 = ['fizz','buzz'];

// Declare a const array then try to add a value
const const13 = ['foo','bar'];
const13.push("fizz");
console.log("This is const13 after adding the new value ",const13);

// Declare a const array then try to delete a value
const const14 = ['foo','bar'];
const14.pop();
console.log("This is const14 after deleting a foo value ",const14);
