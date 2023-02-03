/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const escape = function(str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

$(document).ready(function() {
  //Error messages are hidden by default.
  $("#error-empty").hide();
  $("#error-tooLong").hide();

  //STRETCH: SHOW FORM
  $('.nav-right').on('click', function() {
    $('#new-tweet').toggle(300);
      $('tweet-text').focus();
  });


  // RENDER TWEET: takes an array of tweet objects, appends to #tweets-container
  const renderTweets = function(arr) {
    $('#tweet-container').empty();
    arr.forEach(e => {
      const $tweet = createTweetElement(e);
      $('#tweet-container').prepend($tweet);
    });
  };


  //CREATE TWEET ELEMENT: takes in tweet object, returns a tweet <article>
  const createTweetElement = function(tweet) {
    const $tweet = $(
      `<article class="tweet">
        <header>
          <img src="${tweet.user.avatars}">
          <div>${tweet.user.name}</div>
          <div class="user-handle">${tweet.user.handle}</div>
        </header>
        <p>${escape(tweet.content.text)}</p>
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
      $(".error").html("Error: Your tweet is empty.");
      $('.error').fadeIn(100);
      return;
    }
    if (wordCount > 140) {
      $(".error").html("Error: Your tweet is too long.");
      $('.error').fadeIn(100);
      return;
    }
    $('.error').slideUp(100);
    const newTweet = $(this).serialize();
    $.post('/tweets',
      newTweet,
    )
      .then(function() {
        $('textarea').val('');
        $('#counter').text(140);
        loadTweets();
      });
  });

  //LOAD TWEETS: fetches tweets from the http://localhost:8080/tweets page
  const loadTweets = () => {
    $.ajax('/tweets', { method: 'GET' })
      .then(renderTweets);
  };

  loadTweets();
});
