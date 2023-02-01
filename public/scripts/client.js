/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {

  // // NEW TWEET
  //takes in tweet object, returns a tweet <article>
  const createTweetElement = function(tweet) {
    const $tweet = $(
      `<article class="tweet">
        <header>
          <img src="${tweetData.user.avatars}">
          <div>${tweetData.user.name}</div>
          <div class="user-handle">${tweetData.user.handle}</div>
        </header>
        <p>${tweetData.content.text}</p>
        <footer>
          <div>${tweetData.created_at}</div>
          <div>
            <i class="fa-solid fa-flag"></i>
            <i class="fa-solid fa-retweet"></i>
            <i class="fa-solid fa-heart"></i>
          </div>
        </footer>
    </article>`
    );
    return $tweet;
  };



  // // RENDER TWEET
  // takes an array of tweet objects, appends each one to the #tweets-container



  // // REMOVE BEFORE SUBMISSION
  // Test / driver code (temporary). Eventually will get this from the server.
  const tweetData = {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  };

  const $tweet = createTweetElement(tweetData);

  // Test / driver code (temporary)
  console.log($tweet); // to see what it looks like
  $('.tweet-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
});
