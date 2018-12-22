/*
 * The DOM
 * Document Object Model
 *
 */


/*
  - Programming interface for HTML & XML documents.
  - Provides a structured representation of the document
  - Defines methods to access the structure and manipulate  it
  - Connects web pages to scripts or programming languages
  - DOM is NOT a programming language, it provides a model of a web page
  - The page content is stored in the DOM and can be accessed and manipulated in JavaScript
  - "The DOM provides a representation of the document as a structured group of nodes and objects that have properties and methods." -Mozilla Developer Network
*/

//noprotect

const dummyDiv = document.querySelector(".dummy span");
const testDiv = document.getElementById("test");

const element = document.getElementById("footer");
const elID = element.id;
const replacementID = "bottom";
element.id = replacementID;
console.log(element);

const el = document.getElementsByTagName("div");
const footerDiv = el[el.length - 1];
footerDiv.id = "footer";

const purpleDivs = document.querySelectorAll(".purple");

for(const prop of purpleDivs) {
  prop.classList.add("foo");
}

setInterval(() => {
  for(const prop of purpleDivs) {
    prop.classList.toggle("foo");
  }
}, 3000);


newElement.innerText = "I was created by SCIENCE!";
newElement.classList.add("purple", "foo");

creationDiv.appendChild(newElement);

const myFaveIceCreams = ["vanilla", "rocky road", "strawberry", "chocolate"];

const creationDiv = document.getElementById("created");

const newElement = document.createElement("div");

const newUL = document.createElement("UL");

for(let i = 0 ; i < myFaveIceCreams.length ; i++) {
  const newLI = document.createElement("LI");
  newLI.innerText = myFaveIceCreams[i];
  newUL.appendChild(newLI);
}

newElement.appendChild(newUL);
creationDiv.appendChild(newElement);

function removeIceCream(t) {
  for(const prop of newUL.childNodes) {
    if(prop.innerText === t) {
      newUL.removeChild(prop);
    }
  }
}

removeIceCream("vanilla");
removeIceCream("rocky road");
