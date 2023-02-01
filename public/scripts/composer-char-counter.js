$(document).ready(function() {
  //CHARACTER COUNT: count characters of tweet
  $('#tweet-text').keyup(function(event) {
    const maxChar = 140;
    const charCount = $(this).val().length;
    const charactersLeft = maxChar - charCount;
    $('#counter').text(charactersLeft);

    //change color with css once charCount is exceeded
    if (charactersLeft < 0) {
      $('#counter').addClass('count-exceeded');
    } else {
      $('#counter').removeClass('count-exceeded');
    }
  });
});

