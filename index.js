$(document).ready(function () {
    $('h1').delay(400).animate({'opacity':'1'},800);
    $('button').delay(700).animate({'opacity':'1'},800);
    
    
    $("#getQuote").on("click", function() {
      $.ajax( {
        url: ' https://cors-everywhere.herokuapp.com/https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=',
        error: function() {
          $('#quoteOutput').html('<p>An error has occurred</p>');
        },
        type: 'GET',
        cache: false,
        format:'json',
        dataType:'json',
        success:function(response) {
          $("#quoteOutput").animate({opacity:0}, 500);
          setTimeout(function() {populateQuote(response[0])}, 500);
        }
      });
    });
  
    function populateQuote(quote) {
      $("#quoteOutput").empty();
      $("#quoteOutput").prepend(quote.content + "<p>— " + quote.title + "</p>");
      $("#quoteOutput").animate({opacity:1}, 500);
    }
  });