const myDiv = document.getElementById("main");
const myArr = [1, 2, 3, 4, 5];
for(const prop of myArr) {
	myDiv.innerHTML += `<p>${prop}</p>`;
}

class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	sayHi() {
		console.log(`Hi, ${this.name}`);
	}
}

const billy = new Person("Billy", 21);
billy.sayHi();

console.log("HEYYYYY!!! Billy is cool :D");

console.log("asdasdafkdsfksdfdlk");


