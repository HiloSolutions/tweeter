/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {


  //SERIALIZE FORM DATA: then send it to the server as a query string.
  // RENDER TWEET: takes an array of tweet objects, appends to #tweets-container
  const renderTweets = function(arr) {
    arr.forEach(e => {
      const $tweet = createTweetElement(e);
      $('#tweet-container').append($tweet);
    });
  };


  //CREATE TWEET ELENENT: takes in tweet object, returns a tweet <article>
  const createTweetElement = function(tweet) {
    const $tweet = $(
      `<article class="tweet">
        <header>
          <img src="${tweet.user.avatars}">
          <div>${tweet.user.name}</div>
          <div class="user-handle">${tweet.user.handle}</div>
        </header>
        <p>${tweet.content.text}</p>
        <footer>
          <div>${timeago.format(tweet.created_at)}</div>
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

  //FORM SUBMISSION: Listen for submission, prevent default behaviour, reformat, send to server
  $('#tweet-form').on('submit', function(e) {
    e.preventDefault();

    const wordCount = $('textarea').val().length;
    if (wordCount < 1) {
      alert("Oops! Looks like your tweet is empty. Enter some text and try again.");
      return;
    }
    if (wordCount > 140) {
      alert("You went over the maximum characters.");
      return;
    }

    const newTweet = $(this).serialize();
    $.post('/tweets',
      newTweet,
      () => {
        //console.log(newTweet);
      }
    );

  });

  //LOAD TWEETS: fetches tweets from the http://localhost:8080/tweets page
  const loadTweets = () => {
    //use jQuery to make a request to /tweets
    $.ajax('/tweets', { method: 'GET' })
      .then(function(tweets) {
        renderTweets(tweets);
      });
    //receive the array of tweets as JSON

  };
  
  loadTweets();
});
