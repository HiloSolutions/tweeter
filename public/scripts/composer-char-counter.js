$(document).ready(function() {
  console.log(' the DOM is ready to be manipulated with jQuery');
  //in lecture

  $('textarea').click(function() {
    console.log("i was clicked");
    $(this).addClass('clicked');
  });

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

