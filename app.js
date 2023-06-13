//FUNCTIONS WITH ARGUMNETS (ARGUMENT/PARAMETAR)
function rollDie() {
  let roll = Math.floor(Math.random() * 6) + 1;
  console.log(`rolled: ${roll}`);
}

function throwDice(numRolls) {
  for (let i = 0; i < numRolls; i++) {
    rollDie();
  }
}

function greet(person) {
  console.log(person);
  console.log("Hi");
}

//PRACICE
//Write a function to find the average value in an array of numbers

function avg(arr) {
  //loop over each
  //add them togheter
  //divide by number of nums
  let total = 0;
  for (let num of arr) {
    total += num; // or total = total + num
  }
  let res = total / arr.length;
  return res;
}

//2 is pangram

function isPangram(sentence) {
  let upperCased = sentence.toUpperCase();
  for (let char of "ABCDEGHIJKLMNOPQRSTUVWXYZ") {
    if (upperCased.indexOf(char) === -1) {
      return false;
    }
  }
  return false;
}

console.log(isPangram("asdsad"));

//CALLBACK FUNCTION
function grumpy() {
  alert("omg sta je ovo"); // it shows a popup
}
//         callback function
setTimeout(grumpy, 3000); // it will show a pop up in 3 sec

const btn = document.querySelector("button");
btn.addEventListener("click", function () {
  alert("WHY DID YOU CLICK me?!");
});
