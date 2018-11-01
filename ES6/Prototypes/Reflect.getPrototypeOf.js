/*
 * Name: Reflect.getPrototypeOf
 * Syntax: Reflect.getPrototypeOf(target)
 * Description: When the getPrototypeOf function is called with argument target the following steps are taken: If Type(target) is not Object, throw a TypeError exception. Return target.[[GetPrototypeOf]]().
 * Spec: http://www.ecma-international.org/ecma-262/6.0/#sec-reflect.getprototypeof
 *
 */


 // Get the prototype of a simple Object
 var myObject1 = new Object();
 var myPrototype1 = Reflect.getPrototypeOf(myObject1);
 console.log("This is the prototype of a simple object: ",myPrototype1);

 // Get the prototype of an Object based on null
 var myObject2 = Object.create(null);
 var myPrototype2 = Reflect.getPrototypeOf(myObject2);
 console.log("This is the prototype of an object based on null: ",myPrototype2);

 // Try to get the prototype of a String
 var myString1 = 'foo';
 try{
   var myPrototype3 = Reflect.getPrototypeOf(myString1);
 } catch(e){
   console.log("This is the error when trying to get the prototype of a string ",e);
 }

 // Try to get the prototype of a String with the Object library instead
 var myString2 = 'foo';
 var myPrototype4 = Object.getPrototypeOf(myString2);
 console.log("This is the prototype of string, obtained with the Object library rather than Reflect: ",myPrototype4);
