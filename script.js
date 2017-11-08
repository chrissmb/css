// Code goes here
var scroll = 0;

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
    $(this).append(" <span class='caret'>&#9660;</span>");
  });

  var temModal = $(".modal").length;
  if(temModal) {
    $("body").append('<div class="modal-bg-black"></div>');
  }

  var iconeFechar = '<a href="javascript:void(0)" class="fecha-modal">&times;</a>';
  if (temModal) {
    $(".modal").prepend(iconeFechar);
  }

  $("[modal]").click(function() {
    var modal = $(this).attr("modal");
    var idModal = "#" + modal;
    scroll = $(window).scrollTop();
    $(idModal).addClass("show");
    $(".modal-bg-black").addClass("show");
    $("body").addClass("modal-aberto");
    $(".modal-aberto").css("margin-top", -scroll);
   });

  $(".modal-bg-black,.fecha-modal").click(function() {
    fechaModal();
  });

});

function fechaModal(){
  $(".modal-bg-black").removeClass("show");
  $(".modal").removeClass("show");
  $(".modal-aberto").css("margin-top", "auto");
  $("body").removeClass("modal-aberto");
  $(window).scrollTop(scroll);
}
