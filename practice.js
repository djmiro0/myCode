let fruit="orange";

// key as numbers
const numbers = {
    100: 'one hunderd',
    16: 'sixteen'
};

let mysteryNumber = '100';

// add a value

const numbers = [
    3 ='two',
    3 = 'three',
];

// for loop 

for(let i = 200; i>= 0; i-= 25) {
    console.log(i);
}

for(let i = 1; i <= 10; i++) {
    console.log('BROJ:', i);
}

BROJ: 1
BROJ: 2
BROJ: 3
BROJ: 4
.
.
.
BROJ: 10;


// infinite loops DON'T RUN THIS!


// for(let i =20; i>=0; i++) {
//     console.log(i);
// }

// NESTING LOOPS 

for(let i = 1; i <= 10; i++) {
   console.log('NUMBER:', i);
    for(let j = 10; j >= 0; j -= 2) {
        console.log('  INNER NUMBER:', j);
    }
}

BROJ: 1
    INNER NUMBER: 10
BROJ: 2
    INNER NUMBER: 8 
BROJ: 3
BROJ: 4
.

// WHILE LOOPS
A while loop continues to run as lon as its test condition is true

while(this is true){
    run this
}

// Example
const target = Math.floor(Math.random() * 10);
let guess = Mat.floor(Math.random() * 10);
while(guess !== target) {
    console.log('Target: ${target} Guess: ${guess}');
    guess = Math.floor(Math.random() * 10);
}
console.log('Target: ${target} Guess: ${guess}');

