window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        $('.navbar').removeClass("bColor-T");
         $('.navbar').addClass("bColor-0");
                $('#navbar-menu').removeClass("margin-top--100");

    }
    else {
       
         $('.navbar').removeClass("bColor-0");
        $('.navbar').addClass("bColor-T");
        $('#navbar-menu').addClass("margin-top--100");
    }
//    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//        document.getElementById("navbar2").style.top = "0";
//    }
//    else {
//        document.getElementById("navbar2").style.top = "-120px";
//    }
}
$(document).ready(function(){
    $(".navbar-toggler").click(function(){
       $('#navbar-menu').removeClass("margin-top--100");
    });
});