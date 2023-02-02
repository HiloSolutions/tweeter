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

  //STRETCH: Scroll up
  window.onscroll = () => scrollFunction();

  // When the user scrolls down 20px from the top of the document, show the button

  const scrollFunction = () => {
    if (window.pageYOffset > 50) {
      $('#scroll-btn').fadeIn(100);
    } else {
      $('#scroll-btn').fadeOut(100);
    }
  };

  // When the user clicks on the button, scroll to the top of the document
  $('#scroll-btn').on('click', function() {
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  });
});

