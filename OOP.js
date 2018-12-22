/*
 * Object Oriented Programming (OOP)
 *
 */


/*
  - OOP: basic idea is that you use objects to represent real world
  things. Objects have own properties and functions (methods)
  - Objects can contain data and other code to represent info about
  what you're trying to model
  - Data / methods inside the object is encapsulated
  - In classic OOP, class is defined, then, when an instance of that
  class is created, all the properties and methods are copied(!!!) over
  to the instance
  - JavaScript is dynamic and does not provide a traditional
  class implementation per se.
  - JavaScript inheritance is prototype based
  - Each object has a private property called the prototype
  - The prototype can have a prototype of its own
  - Nearly all objects in JavaScript are instances of Object
  which sits on top of the prototype chain.
  - The prototype property's value is an object
  - Think of it as a bucket to store properties and methods
  - Prototype as a template and can have prototype properties
  of its own
  - "The prototype property is where inherited members are defined" -MDN
*/

const myObj = {
  a: 1,
  b: 2,
}

// console.log(myObj.valueOf());
// Does myObj have a method called valueOf()?
// NO
// Does Object prototype have a method called valueOf()?
// YES
// myObj > Object

const myString = "hello";
// console.log(myString.charAt(0));
// Does myString have a method called charAt()?
// NO
// Does String prototype have a method called charAt()?
// Yes

// console.log(myString.valueOf());
// Does myString have a method called valueOf()?
// NO
// Does String prototype have a method called valueOf()?
// NO
// Does Object prototype have a method called valueOf()?
// YES
// myString > String > Object

const name1 = {
  name: "Billy",
  age: 16,
  sayName: function() {
    console.log(`My name is ${this.name}`)
  },
}

const name2 = Object.create(name1);
name2.name = "Jane Doe";
name2.age = 51;

const name3 = Object.create(name2);
// console.log(name2.hasOwnProperty("age"));


function Animal(name, age) {
  this.name = name;
  this.age = age;
}

Animal.prototype.makeNoise = function() {
  console.log(`generic animal noise`);
}

// const dog1 = new Animal("Spike", 3, "Labrador");
// dog 1 inherits from prototype Animal, which inherits
// from prototype Object
// const dog2 = new Animal("Spot", 2, "Golden Retriever");

function Dog(name, age, breed) {
  Animal.call(this, name, age);
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.makeNoise = function() {
  console.log("bark bark, woof");
}

function Cat(name, age, coloration) {
  Animal.call(this, name, age);
  this.coloration = coloration;
}
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;
Cat.prototype.scratchPost = function() {
  if (this instanceof Kitten) {
    console.log("Kitty scratched post")
  } else {
    console.log("Cat scratched post");
  }
}

function Kitten(name, age, coloration, litter) {
  Cat.call(this, name, age, coloration);
  this.litter = litter;
}
Kitten.prototype = Object.create(Cat.prototype);
Kitten.prototype.constructor = Kitten;


const barky = new Dog("Barky", 1, "Chihuahua");
const kitty = new Cat("Kitty", 3, "tabby");
const tinyKitty = new Kitten("Spot", 0.3, "orange", 1);
