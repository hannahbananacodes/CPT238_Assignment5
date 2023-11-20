
$(document).ready(function() {
    // using "hide" and "show" and callback function
    $("#nonfic").click(function(event) {
        $(".fic").hide("slow", function() {
            $(".nonfic").show("slow");
        });
    })
    $("#fic").click(function(event) {
        $(".nonfic").hide("fast", function() {
            $(".fic").show("fast");
        });
    })
    $("#all").click(function(event) {
        $("img").show();
    })
    // using "slideUp" and "slideDown"
    $("#read").click(function(event) {
        $(".reading").slideUp();
        $(".read").slideDown();
    })
    // using "fadeOut" and "fadeIn"
    $("#reading").click(function(event) {
        $(".read").fadeOut();
        $(".reading").fadeIn();
    })
    // using custom animation
    
    $("#faves").click(function(event) {
    $(".fave").css({
        "border-style": "solid",
        "border-color": "hotpink",
        "border-width": "5px"
    })
})
    $("#nonfaves").click(function(event) {
        $(".fave").css({
            "border-style": "solid",
            "border-color": "hotpink",
            "border-width": "5px"
        }) .animate({"border-width": "hide", "height": "hide"})
    })

})