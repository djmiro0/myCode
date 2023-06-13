//////////////////
function dnaComplement(str) {
  let complement = str.replace(/[ATCG]/g, function (symbol) {
    switch (symbol) {
      case "A":
        return "T";
      case "T":
        return "A";
      case "C":
        return "G";
      case "G":
        return "C";
    }
  });
  return complement;
}

console.log(dnaComplement("ATGC")); // Output: "TACG"
console.log(dnaComplement("CGTA")); // Output: "GCAT"

// ////////////////////////////////////////////
function spinWords(string) {
  let splitted = string.split(" ");
  let result = [];
  for (let key of splitted) {
    if (key.length >= 5) {
      let key1 = key.split("").reverse().join("");
      result.push(key1);
    } else {
      result.push(key);
    }
  }
  console.log(result.join(" "));
}
spinWords("Welcome");
spinWords("Hey fellow warriors"); //"Hey wollef sroirraw";
spinWords("This is a test"); //"This is a test";
spinWords("This is another test"); // "This is rehtona test";

// spinWords("You are almost to the last test"); //"You are tsomla to the last test";

// spinWords("Just kidding there is still one more");
// //"Just gniddik ereht is llits one more";

// spinWords("Seriously this is the last one"); //"ylsuoireS this is the last one";

//////// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

function solution(str) {
  let pairs = [];
  for (let i = 0; i < str.length; i += 2) {
    pairs.push(str[i] + (str[i + 1] || "_"));
  }
  return pairs;
}
//or
function solution(s) {
  return (s + "_").match(/.{2}/g) || [];
}
console.log(solution("abcdef")); //, ["ab", "cd", "ef"]);

//////
// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

function uniqueInOrder(iterable) {
  let result = [];
  let last;
  if (typeof iterable === "string") {
    for (let i = 0; i < iterable.length; i++) {
      if (iterable[i] !== last) {
        result.push(iterable[i]);
        last = iterable[i];
      }
    }
  } else if (Array.isArray(iterable)) {
    for (let i = 0; i < iterable.length; i++) {
      if (iterable[i] !== last) {
        result.push(iterable[i]);
        last = iterable[i];
      }
    }
  }
  return result;
}

//or
var uniqueInOrder = function (iterable) {
  return [...iterable].filter((a, i) => a !== iterable[i - 1]);
};

console.log(uniqueInOrder("AAAABBBCCDAABBB"));
console.log(uniqueInOrder([1, 2, 2, 3, 3]));

////////////

function getSum(a, b) {
  let sum = 0;
  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
    sum += i;
  }
  return sum;
}
console.log(getSum(1, 5));
///sums the numbers in between the a and b

//////////

function sortArray(numbers) {
  let oddNumbers = numbers.filter((num) => num % 2 === 1).sort((a, b) => a - b);
  let oddIndex = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 1) {
      numbers[i] = oddNumbers[oddIndex];
      oddIndex++;
    }
  }
  return numbers;
}

console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));

//////////////

const toCamelCase = (string) => {
  if (string === "") {
    return "empty string";
  } else {
    let splitStr = string.toLowerCase().split("-");

    for (let i = 0; i < splitStr.length; i++) {
      splitStr[i] =
        splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }

    return splitStr.join(" ");
  }
};

console.log(toCamelCase("the_stealth_warrior")),
  "",
  "An empty string was provided but not returned";

//The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.
// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.
// The following are examples of expected output values:
//* RGB TO HEXADECIMAL
function rgb(r, g, b) {
  // Ensure that the RGB values are within the range of 0-255
  r = Math.max(0, Math.min(255, r));
  g = Math.max(0, Math.min(255, g));
  b = Math.max(0, Math.min(255, b));
  // Convert each RGB value to a hexadecimal string
  let hexR = r.toString(16);
  let hexG = g.toString(16);
  let hexB = b.toString(16);
  // Add leading zeroes if necessary
  if (hexR.length === 1) {
    hexR = "0" + hexR;
  }
  if (hexG.length === 1) {
    hexG = "0" + hexG;
  }
  if (hexB.length === 1) {
    hexB = "0" + hexB;
  }
  // Concatenate the strings and return the hex color code
  return "#" + hexR + hexG + hexB;
}

console.log(rgb(255, 255, 255)); // returns FFFFFF
rgb(255, 255, 300); // returns FFFFFF
rgb(0, 0, 0); // returns 000000
console.log(rgb(148, 0, 211)); // returns 9400D3

////////////ROMAN TO INTEGER/NUMBER
function romanToInt(string) {
  const romanToIntMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;
  for (let i = 0; i < string.length; i++) {
    let currentValue = romanToIntMap[string[i]];
    let nextValue = romanToIntMap[string[i + 1]];
    if (nextValue > currentValue) {
      result += nextValue - currentValue;
      i++;
    } else {
      result += currentValue;
    }
  }
  return result;
}
console.log(romanToInt("XXI"));

///Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
  let ordered = [];
  let some = [];
  for (let key in arr) {
    if (typeof "number" && arr[key] === 0) {
      some.push(0);
    } else {
      ordered.push(arr[key]);
    }
  }
  return ordered.concat(some);
}

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));

//ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.
// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

function rot13(message) {
  let result = [];
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let split = alphabet.split("");
  for (i = 0; i <= message.length - 1; i++) {
    if (
      message[i].match(/[a-zA-Z]/) &&
      message[i] === message[i].toUpperCase()
    ) {
      result += split[split.indexOf(message[i].toUpperCase()) + 13];
    } else if (
      message[i].match(/[a-zA-Z]/) &&
      message[i] === message[i].toLowerCase()
    ) {
      result +=
        split[split.indexOf(message[i].toUpperCase()) + 13].toLowerCase();
    } else {
      result += message[i];
    }
  }
  return result.toString();
}

console.log(rot13("tOni"));
//OR
function rot13(message) {
  var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM";
  return message.replace(/[a-z]/gi, (c) => b[a.indexOf(c)]);
}

////////////////////
// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!
// Here's the deal:
// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.

// function generateHashtag(str) {
//   let splitStr = str.toLowerCase().split(" ");
//   let test = splitStr.join("").replace(/\s+/g, "");
//   if (str.length < 140 && str.length > 1 && test !== "") {
//     for (let i = 0; i < splitStr.length; i++) {
//       splitStr[i] =
//         splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
//     }
//     return `#${splitStr.join(" ").replace(/\s+/g, "")}`;
//   } else if (str && test !== "") {
//     for (let j = 0; j < splitStr.length; j++) {
//       splitStr[j] =
//         splitStr[j].charAt(0).toUpperCase() + splitStr[j].substring(1);
//     }
//     return `#${splitStr.join(" ").replace(/\s+/g, "")}`;
//   } else {
//     return false;
//   }
// }

function generateHashtag(str) {
  let splitStr = str.toLowerCase().split(" ");
  let result = "";
  for (let key of splitStr) {
    if (key !== "") {
      ky = key[0].toUpperCase() + key.substring(1);
      result += ky;
    }
  }
  if (result.length >= 140 || result === "") {
    return false;
  } else return `#${result}`;
}

console.log(generateHashtag("string i wrote"));
console.log(generateHashtag(" ".repeat(20)));
