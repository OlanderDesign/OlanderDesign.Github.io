/* Smooth scrolling for internal links */
$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  });
  
  /* Toggle mobile navigation */
  $('.toggle-nav').click(function() {
    $('.nav-links').slideToggle();
  });
  
  /* Highlight current page in navigation */
  $(function() {
    var current = location.pathname;
    $('.nav-links li a').each(function() {
      var $this = $(this);
      if ($this.attr('href').indexOf(current) !== -1) {
        $this.addClass('active');
      }
    });
  });
  
  /* Open links in new tab */
  $('a[href^="http://"], a[href^="https://"]').attr('target','_blank');
  
  /* Smooth scrolling on page load */
  $(document).ready(function(){
    $('html, body').animate({
        scrollTop: $('body').offset().top
    }, 1000);
  });
  