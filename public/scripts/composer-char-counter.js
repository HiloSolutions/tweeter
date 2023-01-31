$(document).ready(function() {
  // --- our code goes here ---
  console.log(' the DOM is ready to be manipulated with jQuery');
});


// CHARACTER COUNTER: variables
const myTweet = document.getElementById("tweet-text");
let wordCount = document.getElementById("counter");


//CHARACTER COUNTER: event listener
myTweet.addEventListener("keyup", function() {
  const maxChar = 140;
  const charCount = this.value.length; //counts characters starting at 0.
  const charactersLeft = maxChar - charCount;
  wordCount.innerText = charactersLeft;

  if (charactersLeft < 0) {
    document.getElementById("counter").style.color = "#c94642";
  } else {
    document.getElementById("counter").style.color = "#545149";
  }
});

// myTweet.addEventListener("keyup", function() {
//   const characters = this.value.length; //counts characters starting at 0.
//   const charactersLeft = wordCount.innerText - characters;
//   wordCount.innerText = charactersLeft;
// });
