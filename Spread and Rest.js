/*
 * Spread and rest
 *
 */

 
/*
  - Can be used in places where (e.g.) functions
  expect multiple arguments, multiple elements, or
  multiple variables
*/

function spreadFunction(...multipleArgs) {
  console.log(multipleArgs);
}

const myArray = [1, 2, 3, 4];
const mySecondArray = [5, 6, 7, 8, 9];
const myThirdArray = [...myArray, 5, 6, 7, 8, 9, 10];


// Alternative to Function.prototype.apply

function sayHello(x, y, z) {
  console.log(`Hello, ${x}, ${y}, ${z}`);
}
const helloArray = ["Bob", "Jane", "Peter"];
sayHello.apply(null, helloArray);
// Spread syntax way:
sayHello(...helloArray);

const arr1 = [100, 200, 300];
const arr2 = [40, 50, 60];
arr1.push.apply(arr1, arr2);

const arr1 = [60, 70, 80];
const arr2 = [90, 100, 110];
arr1.push(...arr2);
console.log(arr1);

// concat()
const myArr = ["jelly beans", "cake"];
const myArr2 = ["donuts", "chocolate"];
const myArr3 = ["pie", "lemonade"];
// const newMyArr = myArr.concat(myArr2, myArr3);
const newMyArr = [...myArr, ...myArr2, ...myArr3];
// console.log(newMyArr);


const listOfCarParts = ["gasket", "tires", "radiator", "muffler"];
const listOfPartsToInsert = ["wipers", "headlights"];

function listInserter(arr1, arr2, index){
  const firstPartOfArray = arr1.slice(0, index);
  const secondPartOfArray = arr1.slice(index);
  const assembledCar = [...firstPartOfArray, ...arr2, ...secondPartOfArray]
  console.log(assembledCar);
}

// listInserter(listOfCarParts, listOfPartsToInsert, 1);

const anotherArr = [10, 1203123, 1203, 1049];
const yetAnotherArr = [...anotherArr];
yetAnotherArr.push(10000);
// console.log(anotherArr, yetAnotherArr);

// vs rest operator
function hasManyArgs(x, y, ...restOfArgs) {
  console.log(x, y);
  for(const prop of restOfArgs) {
    console.log(prop + 10);
  }
}

// hasManyArgs("hi", "hello", 1, 50, 123, 6452, 1232, 243);
