/*
 * Maps and Sets
 *
 */


/*
  - Used for simple key/value pairs
  - Any value can be used for either a key or value (i.e. object, string, function)
  - Reasons for using Map over Object:
    - Object prototype has default keys that might conflict with
    own keys
    - Keys of map can be anything, whereas with objects, have to be
    string or symbol
    - Can easily get the size of Map
*/

const myMap = new Map();
const firstKey = "key";
const firstVal = "first value :D";
const secondKey = {};
const thirdKey = function(){}

myMap.set(firstKey, firstVal);

myMap.set(secondKey, "anotherValue");

myMap.set(thirdKey, "anotherValueAgain");


// Iterating
// keys(), values, entries()

// for(const key of myMap.keys()) {
//   console.log(key);
// }

const myMapData = [["keyA", "value one"],["keyB", "value two"]];
const anotherMap = new Map([
  ["entry1", "val1"],
  ["entry2", "val2"],
]);


// Set object
/*
  -Lets you store unique values of any type
  -Each element is unique
*/

const mySet = new Set();
const obj123 = { a: 1, b: 2};
const obj456 = {x: 1, y: 2, z: 3};
const myString = "Hello there :D";
const aBool = true;
mySet.add(obj123);
mySet.add(obj456);
mySet.add(myString);
mySet.add(aBool);

// mySet.forEach((s) => {
//   if(typeof s === "object") {
//     console.log("we got an object");
//   } else {
//     console.log(s);
//   }
// });

// for(const [key, value] of mySet.entries()) {
//   console.log(`${key} => ${value}`);
// }

// Convert set to array and vice versa
const arrFromSet = Array.from(mySet);
arrFromSet.push(myString);

const myArr123 = [1, 1, 1, 1, 2, 3, 5, 1];
const anotherSet = new Set(myArr123);

const yetAnotherSet = new Set(["a", "z", "q", "t"]);
const anotherArrFromSet = [...yetAnotherSet];
console.log(yetAnotherArrFromSet);
