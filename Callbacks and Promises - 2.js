/*
 * Callbacks and Promises
 * Part 1
 *
 */



// Callback:
/*
  - A callback function is a function that is passed to another function
  as a parameter.
  - This inner function is called at some point during the execution
  of the containing function
  - In other words, it's "called back" at some specified point
  inside the containing function's body
*/


function shouldGoFirst(callBack) {
  setTimeout(() => {
    console.log("I should always go first");
    callBack();
  }, 1000);
}

function shouldGoSecond() {
  console.log("I should always go second");
}


function sumUpNumbers(num1, num2, cb) {
  let summedValue;
  setTimeout(() => {
    summedValue = num1 + num2;
    cb(summedValue);
  }, 1000)
}

function logSummedValue(val) {
  console.log(`The summed total is: ${val}`);
}

// sumUpNumbers(100, 150, logSummedValue);

// Callback function
function sayWhenDone(loopCount) {
  console.log(`Done! :D. Capitalized ${loopCount} names`);
}

// Parent function
function looper(arr, cb) {
  let i = 0;
  for(i ; i < arr.length ; i += 1) {
    const name = arr[i];
    const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
    arr[i] = capitalizedName;
  }
  cb(i);
}

const myNames = ["chris", "russell", "toby", "angela"];

// looper(myNames, sayWhenDone);




function anotherLogger(num1, num2, somethingElse) {
  const squaredAndSummedNums = (num1 * num1) + (num2 * num2);
  console.log(squaredAndSummedNums);
  if (somethingElse) {
    somethingElse(squaredAndSummedNums);
  }
}

// anotherLogger(10, 50, function(p) {
//   console.log(`Squared and summed = ${p}`);
// });


const myDiv = document.getElementById("main");
const myButton = myDiv.querySelector("button");
const fakeData = {
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu nulla sit amet ex eleifend finibus vitae et arcu. Nullam maximus nulla sit amet elementum ullamcorper. Mauris tristique massa sit amet urna imperdiet, vel sagittis felis facilisis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam vel augue quis ante varius cursus quis in arcu. Morbi ut pellentesque lorem, non malesuada lacus. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
}
const myPara = document.getElementById("content");

myButton.addEventListener("click", function() {
  requestData(populateDOM);
});

function requestData(cb) {
  let data = "Loading..."
  cb(data);
  // Fake server request and response
  setTimeout(() => {
    // Response from server:
    data = fakeData.text;
    cb(data);
  }, 2000);
}

function populateDOM(data) {
  myPara.innerText = data;
}




function counter() {
  setTimeout(() => {
    console.log("First");
    setTimeout(() => {
      console.log("Second");
      setTimeout(() => {
        console.log("Third");
        setTimeout(() => {
          console.log("Fourth");
        }, 400);
      }, 600);
    }, 800);
  }, 1000);
}

// counter();


function numCruncher1(num, cb) {
  const newNum = num * num;
  cb(newNum);
}

function numCruncher2(num, cb) {
  const anotherNewNum = num / 100;
  cb(anotherNewNum);
}

function totalSum(a, b, cb) {
  cb(a + b);
}

function crunchNumbers(a, b, cb1, cb2, cb3) {
  cb1(a, function(x) {
    cb2(b, function(y) {
      cb3(x, y, function(result) {
        console.log(result);
      });
    });
  });
}

// crunchNumbers(5, 10, numCruncher1, numCruncher2, totalSum);


// Promises
/*
  - "A Promise is a proxy for a value not necessarily known
  when the promise is created" - Mozilla Developer Network
  - Promises (similar to callbacks) are used for async computations
  - Think of a promise as representing as a value that may be available
  now, later, or never
  - Can associate a handler with an async action
  - A promise exists in three states:
    - Pending: initial state, not fulfilled
    - Fulfilled: OK! Got it
    - Rejected: failed
*/


const testPromise = new Promise((resolve, reject) => {
  if (Math.random() > 0.5) {
    reject("promise no good! Rejected");
  }
  setTimeout(() => {
    resolve("promise OK!");
  }, 1000);
});

// testPromise.then((resolveMessage) => {
//   console.log(`Looks like: ${resolveMessage}`);
// }).then(() => {
//   console.log("I should run after the promise is resolved");
// }).catch((rejectMessage) => {
//   console.log(`Error: ${rejectMessage}`);
// });

function numAdder(n1, n2) {
  return new Promise((resolve, reject) => {
    const addedNums = n1 + n2;
    setTimeout(() => {
      resolve(addedNums);
    }, 500);
  });
}

function numSquarer(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num * num);
    }, 800);
  });
}

// numAdder(10, 10)
//   .then(data => numSquarer(data))
//   .then(moreData => console.log(moreData))
//   .catch(err => console.log(err));

function alwaysResolves() {
  return Promise.resolve("I love resolving :D");
}

alwaysResolves().then(data => console.log(data))

const prom = Promise.resolve([10, 20, 30]);
prom
  .then(nums => nums.map(num => num * 10))
  .then(transformedNums => console.log(transformedNums));

const anotherProm = Promise.resolve({text: "resolved :D"});
anotherProm.then(data => console.log(data.text))

Promise.resolve()
  .then(
    res => {
      return Promise.reject();
    },
    err => {
      console.log("rejected");
    }
  ).then(
    res => {
      console.log("cool")
    },
    err => {
      console.log("Inner promise rejected");
    }
  ).catch(data => console.log(data));


function timeLogger(message, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(message);
    }, time);
    if (typeof message !== "string" || typeof time !== "number") {
      reject();
    }
  });
}

timeLogger("first", 1000)
  .then(message => {
    console.log(message)
    return timeLogger("second", 800);
  }).then(message => {
    console.log(message);
    return timeLogger("third", 100);
  }).then(message => {
    console.log(message);
    return timeLogger("fourth", 50);
  }).then(message => {
    console.log(message);
  }).catch(err => console.log("incorrect input"));

Promise.resolve()
  .then(() => {
    setTimeout(() => {
      console.log("first");
      return Promise.resolve();
    }, 1000);
  }).then(() => {
    setTimeout(() => {
      console.log("second")
    }, 500);
  })

// return in then
// effectively same as saying return Promise.resolve(...)

Promise.resolve("Hi")
  .then(string => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
       resolve(string + " there, ");
      }, 100);
    });
  }).then(string => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(string + " Chris");
      }, 1);
    });
  })
  .then(string => {
    console.log(string);
  });


const userName = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject({text: "error"});
  }, 1000);
});

const position = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({text: "manager"});
  }, 300);
});

// const employees = {

// }

Promise.all([userName, position])
  .then(data => data.map(entry => entry.text))
  .then(content => employees[0] = content)
  .catch(err => console.log(err));


Promise.race([userName, position])
  .then(data => console.log(data.text))
  .catch(err => console.log(err.text))
