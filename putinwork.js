const auth = {
  username: "tommy",
  password: "tonale",
  login() {
    console.log("logged in");
  },
};

console.log(auth);

// deck of cards

function makeDeck() {
  const deck = [];
  const suits = ["hearts", "diamonds", "spades", "clubs"];
  const values = "2,3,4,5,6,7,8,9,10,J,Q,K,A";
  for (let value of values.split(",")) {
    for (let suit of suits) {
      deck.push({
        value,
        suit,
      });
    }
  }
  return deck;
}

console.log(makeDeck());

function drawCard(deck) {
  return deck.pop();
}

const myDeck = makeDeck();
const card1 = drawCard(myDeck);

//shuffle cards

function shuffle(arr) {
  //loop over array backwards
  for (let i = arr.length - 1; i > 0; i--) {
    //pick random index before current element
    let j = Math.floor(Math.random() * (i + 1));
    //swap
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}
