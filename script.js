// Code goes here
var scrollPosition = 0;

$(document).ready(function () {

  //Fechar dropdown ao clicar fora
  $(document).click(function () {
    $(".dropdown-content").removeClass("show");
  });

  //Click no dropdown
  $(".dropdown").click(function () {
    $(".dropdown-content").not(this)
        .not($(this).children(".dropdown-content")).removeClass("show");
    $(this).children(".dropdown-content").toggleClass("show");
    event.stopPropagation();
  });

  //Se mobile e sidebar não fechar dropdown ao clicar no conteúdo
  $(".dropdown-content").click(function () {
    var eMobile = $(window).width() < 600;
    var eSidebar = $(this).parents(".sidebar").length;

    if (eMobile || eSidebar) {
      event.stopPropagation();
    }
  });

  //Inclui um gliph para cada link dropdown
  $(".dropdown").children("a").each( function () {
    $(this).append(" <span class='caret'>&#9660;</span>");
  });

  // Se tem modal cria div que proporciona fundo escuro
  var temModal = $(".modal").length;
  if(temModal) {
    $("body").append('<div class="modal-bg-black"></div>');
  }

  //Inclui botão de fechar no modal
  var iconeFechar = '<a href="javascript:void(0)" class="fecha-modal">&times;</a>';
  if (temModal) {
    $(".modal").prepend(iconeFechar);
  }

  //Abrir modal
  $("[modal]").click(function () {
    var modal = $(this).attr("modal");
    var idModal = "#" + modal;
    scrollPosition = $(window).scrollTop();
    $(idModal).addClass("show");
    $(".modal-bg-black").addClass("show");
    $("body").addClass("modal-aberto");
    $(".modal-aberto").css("margin-top", -scrollPosition);
  });

  //Fecha modal quando clica fora
  $(".modal-bg-black,.fecha-modal").click(function () {
    fechaModal();
  });

  //Incluir campos para todas linhas da tabela quando responsivo
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

});


//fecha modal
function fechaModal(){
  $(".modal-bg-black").removeClass("show");
  $(".modal").removeClass("show");
  $(".modal-aberto").css("margin-top", "auto");
  $("body").removeClass("modal-aberto");
  $(window).scrollTop(scrollPosition);
}
