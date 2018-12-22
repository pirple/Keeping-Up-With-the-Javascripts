/*
 * Exceptions
 *
 */

 

// Throw your own exception
/*
  - Use the throw statement to throw own exception
  - You specify the expression containing the value to be thrown
    e.g.: throw expression
  - Can throw any expression
*/

const myObjException = {
  toString: function() {
    return "I am an object exception";
  }
}

function MyException(message) {
  this.message = message;
  this.name = "My exception";
  this.toString = function() {
    return this.name + ": " + this.message;
  }
}

// throw new MyException("Missing data");

// try...catch

// try {
//   throw "Exception!";
// }
// catch(e) {
//   console.log(e);
// }

let myNum = "Chris";
const myErrorLog = [];

function checkIfNum(num) {
  if (isNaN(num)) {
    throw "not a number!";
  } else {
    console.log("Yes, this is a number")
  }
}

function errorHandler(e) {
  myErrorLog.push(e);
}

try {
  checkIfNum(myNum);
}
catch(catchID) {
  errorHandler(catchID);
}



function MyString(string) {
  if (typeof string === "string") {
    this.value = string;
    this.getValue = function() {
      console.log("Your string: " + this.value + ".");
    }
  }
  else {
    throw new StringExceptionError(string);
  }
}

function StringExceptionError(value) {
  this.value = value;
  this.message = "must be a string";
  this.toString = function() {
    return this.value + ": " + this.message;
  }
}

function verifyString(s) {
  let str;
  try {
    str = new MyString(s);
  }
  catch(e) {
    if (e instanceof StringExceptionError) {
      console.log("String exception: " + e);
    }
    else {
      throw "Unknown error";
    }
  }
  return str;
}



const a = verifyString("2313123");


function finallyExample() {
  try {
    console.log("Hi");
    throw 'test';
  }
  catch(e) {
    console.log(e);
    throw "Boo!";
  }
  finally {
    console.log("Can I run?");
    return;
  }
}

console.log(finallyExample());
