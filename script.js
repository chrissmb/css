// Code goes here

$(document).ready(function(){
    
    $(document).click(function() {
      $(".dropdown-content").removeClass("show");
    });
    
    $(".dropdown").click(function() {    
      $(".dropdown-content").not(this)
          .not($(this).children(".dropdown-content")).removeClass("show");
      $(this).children(".dropdown-content").toggleClass("show");
      event.stopPropagation();
    });
    
    $(".dropdown-content").click(function() {
      var eMobile = $(window).width() < 600;
      var eSidebar = $(this).parents(".sidebar").length;
      
      if (eMobile || eSidebar) {
        event.stopPropagation();
      }
    });
    
    $(".dropdown").children("a").each( function() {
      $(this).html(
        $(this).html() + " <span class='caret'>&#9660;</span>"
      );
    });
    
  });
  