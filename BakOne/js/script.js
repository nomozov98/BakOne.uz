$(document).ready(function() {

    // typing animation
    (function($) {
      $.fn.writeText = function(content) {
          var contentArray = content.split(""),
              current = 0,
              elem = this;
          setInterval(function() {
              if(current < contentArray.length) {
                  elem.text(elem.text() + contentArray[current++]);
              }
          }, 80);
      };
      
    })(jQuery);
  
    // input text for typing animation 
    $("#holder").writeText("WEB DESIGNER + FRONT-END DEVELOPER");
  
    // initialize wow.js
    new WOW().init();
      
    // Push the body and the nav over by 285px over
    var main = function() {
      $('.fa-bars').click(function() {
        $('.nav-screen').animate({
          right: "0px"
        }, 200);
  
        $('body').animate({
          right: "285px"
        }, 200);
      });
  
      // Then push them back */
      $('.fa-times').click(function() {
        $('.nav-screen').animate({
          right: "-285px"
        }, 200);
  
        $('body').animate({
          right: "0px"
        }, 200);
      });
  
      $('.nav-links a').click(function() {
        $('.nav-screen').animate({
          right: "-285px"
        }, 500);
  
        $('body').animate({
          right: "0px"
        }, 500);
      });
    };
  

    // move section down one
    $(document).on('click', '#moveDown', function(){
      $.fn.fullpage.moveSectionDown();
    });
  
    // fullpage.js link navigation
    $(document).on('click', '#skills', function(){
      $.fn.fullpage.moveTo(2);
    });
  
    $(document).on('click', '#projects', function(){
      $.fn.fullpage.moveTo(3);
    });
  
    $(document).on('click', '#contact', function(){
      $.fn.fullpage.moveTo(4);
    });
  
  });
