/*
 * Name: Reflect.setPrototypeOf
 * Syntax: Reflect.setPrototypeOf(target,proto)
 * Description: When the setPrototypeOf function is called with arguments target and propertyKey, the following steps are taken: If Type(target) is not Object, throw a TypeError exception. If Type(proto) is not Object and proto is not null, throw a TypeError exception Return target.[[SetPrototypeOf]](proto).
 * Spec: http://www.ecma-international.org/ecma-262/6.0/#sec-reflect.setprototypeof
 *
 */

// Create an object and add a single method to its prototype
var myObject1 = new Object();
var myObject2 = new Object();
var myNewPrototype1 = {
  'foo' : 'bar',
};
Reflect.setPrototypeOf(myObject1,myNewPrototype1);
console.log("This is the prototype of myObject1 ",Reflect.getPrototypeOf(myObject1));
console.log("This is the prototype of myObject2 ",Reflect.getPrototypeOf(myObject2));

// Create an object and add a single method to its prototype
var myObject3 = new Object();
var myObject4 = new Object();
var myNewPrototype2 = {
  'red' : 'orange',
  'yellow' : 'green'
};
Reflect.setPrototypeOf(myObject3,myNewPrototype2);
console.log("This is the prototype of myObject1 ",Reflect.getPrototypeOf(myObject3));
console.log("This is the prototype of myObject2 ",Reflect.getPrototypeOf(myObject4));

// Overwrite the entire prototype as null
var myObject5 = new Object();
var myObject6 = new Object();
Reflect.setPrototypeOf(myObject5, null);
console.log("This is the prototype of myObject5 ",Reflect.getPrototypeOf(myObject5));
console.log("This is the prototype of myObject6 ",Reflect.getPrototypeOf(myObject6));
