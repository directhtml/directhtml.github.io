$(document).ready(function(){
    $(".dh-intro-anc").click(function(){
        $(".dh-tabs").hide();
        $(".dh-intro").show();
        $(".anc").removeClass("active");
        $(this).addClass("active");
    });
    $(".dh-components-anc").click(function(){
        $(".dh-tabs").hide();
        $(".dh-components").show();
        $(".anc").removeClass("active");
        $(this).addClass("active");
    });
    $(".dh-ready-anc").click(function(){
        $(".dh-tabs").hide();
        $(".dh-ready-to-use").show();
        $(".anc").removeClass("active");
        $(this).addClass("active");
    });
    $(".dh-give-anc").click(function(){
        $(".dh-tabs").hide();
        $(".dh-give-us-call").show();
        $(".anc").removeClass("active");
        $(this).addClass("active");
    });
});