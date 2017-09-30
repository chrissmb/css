$(document).ready(function(){
    var dropdownAtivo = false;

    $(document).click(function() {
        $(".dropdown-content").hide();
    });

    $(".dropdown").click(function(){
        $(".dropdown-content").not(this)
            .not($(this).children(".dropdown-content")).hide();
        $(this).children(".dropdown-content").toggle();
        event.stopPropagation();
    });

    $(".dropdown").children("a").each( function() {
        $(this).html(
        $(this).html() + " <span style='font-size:9px'>&#9660;</span>"
        );
    });

});