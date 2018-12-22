/*
 * Classes
 *
 */


// Classes in ES6 are just syntactical sugar over JavaScript's
// existing prototype-based inheritance
// Simple, clean syntax to create objects and take care of inheritance

// Pre-ES6 way:
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Person.prototype.greetings = function() {
//   console.log("Greetings :D");
// }

// function Employee(name, age, role) {
//   Person.call(this, name, age);
//   this.role = role;
// }

// Employee.prototype = Object.create(Person.prototype);
// Employee.prototype.constructor = Employee;

// const bill = new Employee("Bill", 41, "janitor");
// bill.greetings();

// Classes - a sort of special function
// Classes are NOT hoisted

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greetings() {
    return "classes r the kewlest :D";
  }
}

// Super keyword calls functions on an object's parent class

class Employee extends Person {
  constructor(name, age, position) {
    super(name, age);
    this.position = position;
  }
  sayGreeting() {
    const parentString = super.greetings();
    console.log(`${this.name} thinks ${parentString}`)
  }
}

class Customer extends Person {
  constructor({name="customer", age="n/a", contactMethod}) {
    super(name, age);
    this.contactMethod = contactMethod;
    this.accountCredit = null;
  }
  addCredit(amount) {
    this.accountCredit += amount;
  }
  reduceCredit(amount) {
    this.accountCredit -= amount;
  }
  static sayCustomerNames(...customers) {
    for(const c of customers){
     console.log(c.name);
    }
  }
  static transferCredit(source, target) {
    const amt = source.accountCredit;
    target.accountCredit += amt;
    source.accountCredit -= amt;
  }
}

const customer1 = new Customer({name: "Bob", contactMethod: "email"});
const customer2 = new Customer({name: "Jane Doe", contactMethod:"mobile"});
const customer3 = new Customer({name: "Ashley", contactMethod: "email"});

customer1.addCredit(100);
customer1.reduceCredit(50);
customer2.addCredit(25);

// console.log(customer1.accountCredit);
// Customer.transferCredit(customer2, customer1);
// console.log(customer1.accountCredit, customer2.accountCredit);


class FamilyMember {
  constructor(lastName, firstName, relationship) {
    this.lastName = lastName;
    this.firstName = firstName;
    this.relationship = relationship;
  }
  sayFamilyName() {
    console.log(`We are the ${this.lastName}s`)
  }
}

class FamilyGroup {
  constructor(parents=[],children=[]) {
    this.parents = parents;
    this.children = children;
  }
  addMember(member) {
    this.children.push(member);
  }
}

const smithFamily = {
  1: ["Smith", "Bill", "father"],
  2: ["Smith", "Catherine", "mother"],
  3: ["Smith", "Annie", "daughter"],
  4: ["Smith", "Will", "son"],
}

const anotherFamily = {
  1: ["Wilson", "BillyBob", "father"],
  2: ["Wilson", "JoeyJoeJoe", "son"]
}


const createFamily = (famObj) => {
  const newFamGroup = new FamilyGroup();
  for(const prop in famObj) {
    const [last, first, relationship] = famObj[prop];
    const newMember = new FamilyMember(last, first, relationship);
    if (relationship === "father" || relationship === "mother") {
      newFamGroup.parents.push(newMember);
    } else {
      newFamGroup.children.push(newMember);
    }
  }
  return newFamGroup;
}

const theSmiths = createFamily(smithFamily);
const theWilsons = createFamily(anotherFamily);
