/*
 * Switch Statements
 *
 */


/*
  switch(expression) {
    case value1:
      statement to be executed when result of expression
      matches value1
      break;
    case value2:
      ...
      break;
    case value3:
      ...
      break;
    default:
      break;
  }
*/


function fruitLogger(fruit) {
  switch(fruit) {
    case "apple":
    case "orange":
    case "banana":
      console.log("Great! I love fruit.");
      break;
    default:
      console.log("I didn't understand that but sure :D");
      break;
  }
  console.log("Broke out of switch statement");
}

function numChecker(num) {
  let value;
  switch(num) {
    case 0:
    case 1:
    case 2:
      value = "low range";
      setVolume(value);
      break;
    case 3:
    case 4:
    case 5:
      value = "mid range";
      setVolume(value);
      break;
    case 6:
    case 7:
    case 8:
      value = "high range";
      setVolume(value);
      break;
    default:
      value = "Input number between 0-8";
      console.log(value);
      break;
  }
}

function setVolume(n) {
  console.log("Volume set at " + n );
}



const donutPicker = (flav) => {
  switch(flav) {
    case "s":
      return "sprinkles";
    case "c":
      return "chocolate glazed";
    case "b":
      return "bear claw";
    default :
      return null;
  }
}

const donuts = (selection) => {
  const selectedDonut = donutPicker(selection);
  if (!selectedDonut) {
    console.log("Incorrect selection");
  } else {
    console.log("You have selected " + selectedDonut);
  }
}
