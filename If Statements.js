/*
 * If Statements
 *
 */

 // Strict equality operator

const shouldSayHi = true;

if (shouldSayHi === true) {
  alert('Hi there')
}

// If statement
// Tells the code: if this thing is true, run more code

// if (expression) {
// statement(s) to be executed if expression
// evaluates to truthy or falsey
// }



const bankAccountBalance = 100;
const costOfItem = 123;
const hasCreditCard = true;
const hasReachedCreditLimit = true;

if (bankAccountBalance >= costOfItem) {
  console.log("Congrats! You can pay for this with cash!")
} else if (hasCreditCard && !hasReachedCreditLimit){
  console.log("You can pay for this with credit")
} else {
  console.log("Sorry, you cannot purchase this item! :(")
}
