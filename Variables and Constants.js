/*
 * Variables and Constants
 *
 */

 // var, let, and const examples. Var and let can be reassigned to new values, but const cannot
var name = "Joe";
var myArray = [10, 20, 30];
var myObj = { a: 1, b: 2};

let anotherName = "Joelle";
let myOtherArray = [true, false, true, 100];
let myOtherObj = { a: 100, b: 200};

const yetAnotherName = "Joey";
const yetAnotherArr = ["yes", "no", "maybe"];
const yetAnotherObj = { id: 1212132, username: "es6dude"};



// Examples of var in a function - vars are function-scoped

var myName = "Chris";

function whatName() {
  var myName = "Bob"
  console.log(myName)
}

console.log(myName);

function sayHi() {
  var shouldSayHi = true;
  var reallySayHi = true;
  if (shouldSayHi === true) {
    let myName = "Chris";

  }
  console.log("Hi" + myName)
}

sayHi();

// Example of let in a function - let is block-scoped
function sayHiAgain() {
  let shouldSayHi = false;
  let myName;
  if (shouldSayHi === true) {
    myName = "Chris";
    console.log("Hi" + " " + myName)
  }
  else {
    myName = "Bob";
    console.log("Hi" + " " + myName)
  }
}

sayHiAgain();

// const example - const cannot be reassigned
const myArray = [1, 2, 3];
console.log(myArray;)
