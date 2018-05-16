// Code goes here
var scrollPosition = 0;

$(document).ready(function () {
  
  $(document).click(function () {
    $(".dropdown-content").removeClass("show");
  });
  
  $(".dropdown").click(function () {    
    $(".dropdown-content").not(this)
        .not($(this).children(".dropdown-content")).removeClass("show");
    $(this).children(".dropdown-content").toggleClass("show");
    event.stopPropagation();
  });
  
  $(".dropdown-content").click(function () {
    var eMobile = $(window).width() < 600;
    var eSidebar = $(this).parents(".sidebar").length;
    
    if (eMobile || eSidebar) {
      event.stopPropagation();
    }
  });
  
  $(".dropdown").children("a").each( function () {
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
  
  $("[modal]").click(function () {
    var modal = $(this).attr("modal");
    var idModal = "#" + modal;
    scrollPosition = $(window).scrollTop();
    $(idModal).addClass("show");
    $(".modal-bg-black").addClass("show");
    $("body").addClass("modal-aberto");
    $(".modal-aberto").css("margin-top", -scrollPosition); 
   });
  
  $(".modal-bg-black,.fecha-modal").click(function () {
    fechaModal();
  });
  
  $(".tabela.responsiva").each(function () {
    var campos = [];
    $(this).find("th").each(function () {
      campos.push($(this).text());
    });
    $(this).find("tr").each(function () {
      $(this).children("td").each(function (index) {
        $(this).attr("campo", campos[index]);
      });
    });
  });
  
  $(".custom-file").append("<label>Selecione o arquivo</lable>");
  $(".custom-file input:file").change(function () {
    var filename = $(this).val();
    if (filename != '') {
      filename = '...' + filename.slice(-14);
    } else {
      filename = 'Selecione o arquivo';
    }
    $(this).next().remove();
    $(this).after("<label>" + filename + "</label>");
  });
  
});

function fechaModal(){
  $(".modal-bg-black").removeClass("show");
  $(".modal").removeClass("show");
  $(".modal-aberto").css("margin-top", "auto");
  $("body").removeClass("modal-aberto");
  $(window).scrollTop(scrollPosition);
}
