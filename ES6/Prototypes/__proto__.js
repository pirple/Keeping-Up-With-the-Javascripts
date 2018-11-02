/*
 * Name: Object.prototype.__proto__
 * Syntax: SampleObject.__proto__
 * Description - Overall: Object.prototype.__proto__ is an accessor property with attributes { [[Enumerable]]: false, [[Configurable]]: true }.
 * Description - Getter: The value of the [[Get]] attribute is a built-in function that requires no arguments. It performs the following steps: Let O be ToObject(this value).vReturnIfAbrupt(O).vReturn O.[[GetPrototypeOf]]().
 * Description - Setter: The value of the [[Set]] attribute is a built-in function that takes an argument proto. It performs the following steps: Let O be RequireObjectCoercible(this value). ReturnIfAbrupt(O). If Type(proto) is neither Object nor Null, return undefined. If Type(O) is not Object, return undefined. Let status be O.[[SetPrototypeOf]](proto). ReturnIfAbrupt(status). If status is false, throw a TypeError exception. Return undefined.
 * Spec: http://www.ecma-international.org/ecma-262/6.0/#sec-object.prototype.__proto__
 *
 */


// Get the prototype of a simple Object
var myObject1 = new Object();
var myPrototype1 = myObject1.__proto__;
console.log("This is the prototype of a simple object: ",myPrototype1);

// Get the prototype of an Object based on null
var myObject2 = Object.create(null);
var myPrototype2 = myObject2.__proto__;
console.log("This is the prototype of an object based on null: ",myPrototype2);

// Set a single method (a new function) on the prototype of an object
var myObject3 = new Object();
var myObject4 = new Object();
myObject3.__proto__.foo = function(){
  return 'bar';
};
console.log("This is the new method added to the prototype of myObject3: ",myObject3.foo());

// Confirm that the foo() function has been added to the other object's prototype as well
console.log("This is the new method automatically added to the prototype of myObject4 as well: ",myObject4.foo());

// Confirm that the foo() function has been added to prototype of an object created before myObject3
console.log("This is the new method automatically added to the prototype of myObject1 as well: ",myObject1.foo());

// Confirm that the foo() function has NOT been added to prototype of the object that had a null prototype
console.log("This new method has not been added to any objects with null prototypes: ",typeof(myObject2.foo));

// Confirm that the foo() function has been added to prototype of an object created after myObject3's prototype was modified
var myObject5 = new Object();
console.log("This is the new method automatically added to the prototype of a brand new object as well: ",myObject5.foo());

// Add a method to an object prototype with a different syntax
var myObject6 = {};
myObject6.__proto__ = {"red" : "orange"};
console.log("This is the prototype of the object with one method added through OLN",myObject6.__proto__);
console.log("This is the prototype of another arbitrary object to see if it's been modifgied",myObject1.__proto__);

// Add two methods to an object prototype
var myObject7 = {};
myObject6.__proto__ = {
  "yellow" : "green",
  "blue" : "purple"
};
console.log("This is the prototype of the object with multiple methods added through OLN",myObject7.__proto__);
console.log("This is the prototype of another arbitrary object to see if it's been modifgied",myObject1.__proto__);

// Create a new object using Object Literal Notation, and explicitly state the prototype
var myObject8 = {
  'foo' : 'bar',
  'fizz' : 'buzz',
  __proto__ : {
    'hello' : 'world'
  }
}
console.log("This is the full contents of myObject6, including the prototype: ",myObject6);

// Set an object's entire prototype to null
var myObject9 = new Object();
var myObject10 = new Object();
myObject9.__proto__ = null;
console.log("This is the prototype of the object whose prototype was set entirely to null: ",myObject9.__proto__);
console.log("This is the prototype of the object whose prototype was not set to null: ",myObject10.__proto__);

// Get the prototype of a String
var myString1 = 'foo';
var myPrototype3 = myString1.__proto__;
console.log("This is the prototype of a string ",myPrototype3);

// Set a single method (a value) on the prototype of a string
var myString2 = 'hello';
myString2.__proto__.say = 'world';
console.log("This is the new method added to the prototype of myString2: ",myString2.say);

// Try to overwrite the entire prototype of a string with a single method via OLN
var myString3 = 'hello';
myString3.__proto__ = {"red" : "orange"};
console.log("This is the prototype of myString3 after overwriting with a single method via OLN ",myString3.__proto__);

// Try to overwrite the entire prototype of a string with mulitple properties rather than just a method
var myString4 = 'hello';
myString4.__proto__ = {
  "yellow" : "green",
  "blue" : "purple"
};
console.log("This is the prototype of myString4 after overwriting with an object with multiple properties ",myString4.__proto__);
