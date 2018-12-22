/*
 * Destructuring
 *
 */

 
/*
  - "The destructuring assignment syntax is a
     JavaScript expression that makes it possible
     to extract data from arrays or objects into
     distinct variables" - Mozilla Developer Network
  - Destructuring syntax can be used on left-hand
    side of assignments
*/

// Array destructuring
const myArray = [1, 2, 3, 4, 5];
const [x, y, z, a, b] = myArray;

const mySecondArray = ["Jane Doe", "John Doe", "Billy Bob"];
let name1, name2, name3, name4;
[name1, name2, name3, name4="I'm a default :D"] = mySecondArray;

// Swap two variables
let aa = 100;
let bb = 250;
let cc = 500;
// console.log(aa, bb, cc);
[bb, cc] = [cc, bb];

// Use with functions
function foodFilter(arr, term) {
  return arr.filter((t) => t === term)
}

const [result] = foodFilter(["chicken", "fish", "tofu"], "tofu");
const [result2] = foodFilter(["pizza", "donut", "ice cream"], "pizza");

// Can ignore some values
const anotherArr = [10, 20, 50, 100, 1000, 30];
const [numA,,,,numD, ] = anotherArr;
// console.log(`First: ${numA}, second: ${numD}`);

// Can use rest pattern
const yetAnotherArr = ["dogs", "cats", "birds", "snakes", "hedgehogs"];
const [dogString, ...otherAnimals] = yetAnotherArr;


// Object destructuring
const myObj = {firstName: "Chris", lastName: "Jones", age: 16, height: "6ft"};
const { lastName, height, firstName } = myObj;
// console.log(lastName, height, firstName);

let myVar1, myVar2;
const myObj2 = {myVar1: "a", myVar2: "b"};
({ myVar1, myVar2 } = myObj2);

// Assigning new variable names
const myObj3 = { q: "cool!", w: "oh yeah!", e: "nice :D", r: "awesome!" };
const { q: cool, w, e: nice, r} = myObj3;

const myObj4 = { uuid: 134314309, userName: "es6rulez", loggedIn: new Date()};
const { uuid: userID, userName: name, loggedIn: lastLoginDate} = myObj4;
// console.log(lastLoginDate.toLocaleString());


// Defaults
const myObj5 = { a1: 10, b1: 20, c1: 30, d1: 40, e1: 100 };
const { a1, b1, c1, d1, e1 = 50} = myObj5;

function stateUser(obj) {
  const { user = null, memberType } = obj;
  if (!user) {
    console.log("Error! No user name entered >:(");
    return
  } else {
    console.log(`Username: ${user}, membership type: ${memberType}`);
  }
}

const member1 = { user: "Steve", memberType: "premium"};
const member2 = { memberType: "free" };


function sayIfValid({prop, a111}) {
  return {
    prop,
    a111,
    constructed: true
  }
}

const myObj6 = {
  prop: "I am valid",
  proop: "I am not valid",
  a111: "I am also not valid",
}

const myConstructedObj = sayIfValid(myObj6);
const { constructed } = myConstructedObj;

// Nested objects

const myObj7 = {
  title: "My address book",
  entries: [
    {
      name: "Bob",
      number: "555-5555",
      address: "123 Fake St",
      other: {
        cell: "555-3333",
        email: "bob@es6rulez.com",
      }
    },
    {
      name: "Jill",
      number: "555-1234",
      address: "155 Fake St",
      other: {
        cell: null,
        email: "jill@jill.co.uk"
      }
    },
    {
      name: "Billy",
      number: "555-8888",
      address: "555 Fake St",
      other: {
        cell: "555-1233",
        email: null
      }
    },
    {
      name: "Joan",
      number: "123-4444",
      address: "100 Fake Ave",
      other: {
        cell: "555-7779",
        email: null
      }
    }
  ],
  myPhone: "555-1111",
}
const { title, entries } = myObj7;

for (const {name: n, address: a, other:{cell, email}} of entries) {
  console.log(`Name: ${n}, address: ${a}, cell: ${cell}, email: ${email}`);
}


const myObj8 = {
  myProp1: "Ahhh!",
  myProp2: [20, 50],
}

const { myProp1, myProp2: [ , yy]} = myObj8;
