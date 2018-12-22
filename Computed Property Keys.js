/*
 * Computed Property Keys
 *
 */

 
// Allows use of [] which will evaluate(a.k.a. compute) as the property name

let myID = 0;
const idParam = "userID";
const computedObj = {
  [idParam + ++myID]: "1003411",
  [idParam + ++myID]: "353245425141",
  ["param" + "eter"]: false,
}

function capitalizer(word) {
  const a = word.charAt(0).toUpperCase();
  const b = word.slice(1).toLowerCase();
  return a + b;
}

const obj111 = {
  [capitalizer("hello")] : "something",
  [capitalizer("ALLCAPS")] : "sfkakdaada"
}

function dataFormat(arr) {
  const formattedObj = {};
  for(const prop of arr) {
    formattedObj["userID" + prop.x] = prop;
  }
  return formattedObj;
}

// console.log(dataFormat(bob));
