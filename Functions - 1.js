/*
 * Functions - 1
 *
 */



const users = [
  {name: "Chris", age: 60},
  {name: "Jane", age: 30},
  {name: "Billy", age: 45}
];
const mapUserNames = (myArr) =>
  myArr.map((user) => user.age);


function numberMultiplier(x=5, y=10) {
  return x * y;
}


const initialString = "How are you?"
function stringSplitter(str=initialString) {
  return str.split(" ");
}


const bankAccount = {
  canSpendMoney: true,
  balance: 100
}


function purchaseItem(price, acct=bankAccount) {
  if (acct.canSpendMoney) {
    acct.balance -= price;
    if (acct.balance <= 0) {
      acct.canSpendMoney = false;
    }
    return true;
  } else {
    return false;
  }
}


function multiply(multiplier, ...nums) {
  return nums.map((n) => multiplier * n)
}


function Dog(years, breed) {
  this.age = years;
  this.type = breed;
  setInterval(() => {
    this.age += 1;
  }, 5000)
}

const spike = new Dog(3, "Golden Retriever");
const fido = new Dog(5, "Poodle");
