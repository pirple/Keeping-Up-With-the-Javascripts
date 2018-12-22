/*
 * Method Definitions
 *
 */


// Pre-ES6, in object literals, methods are defined as function expressions
// E.g:
const myObj = {
  id: 10,
  sayHi: function() {
    console.log("hi");
  }
}

// ES6 has method definitions for creating methods
const myES6Obj = {
  id: 11,
  sayHi() {
    console.log("ES6 is cool!");
  },
  sayBye() {
    console.log("Bye now!");
  }
}

const anotherObj = {
  greet(arg1) {
    console.log(`Hey ${arg1}!`)
  },
  anotherMethod(...args) {
    this.greet(args[0]);
    console.log(`I have ${args.length} arguments!`);
  }
}

// anotherObj.anotherMethod("Tim", 1, false, true, [123], 61);
