
$(document).ready(function () {
    // *** HEADER ***
    // header
    $("header")
        .css("display", "flex")
        .css("justify-content", "center")

    $("#header-content")
        .css("background-color", "green")
        .css("height", "120px")
        .css("width", "90%")
        .css("display", "flex")
        .css("align-items", "center")
        .css("box-sizing", "border-box")
        .css("padding", "0 20px")
        .css('border-radius', '10px')

    $("#header-content #brand")
        .css("display", "flex")
        .css("align-items", "center")
        .css("justify-content", "flex-start")
        .css("width", "225px")

    $("#header-content h1")
        .css("color", "white")
        .css("float", "left")
        .css("margin", "0")

    $("#header-content nav")
        .css("display", "flex")
        .css("justify-content", "flex-end")
        .css("align-items", "center")
        .css("width", "85%")

    $("#header-content a")
        .css("color", "white")
        .css("text-decoration", "none")
        .css("font-size", "1.3rem")
    
    
    // *** CONTENT ***
    $("#content")
        .css("display", "flex")
        .css("justify-content", "space-around")
        .css("margin", "20px 0")
        .css("flex-wrap", "wrap")

    $(".card-area")
        .css("width", "400px")
        .css("display", "flex")
        .css("justify-content", "center")
    
    $(".card")
        .css("width", "100%")
    
    $("#content p span")
        .css("font-weight", "bold")
        .css("font-size", "1.2rem")
        .css("color", "lawngreen")
    
    $('#content #button-area')
        .css("display", "flex")
        .css("flex-flow", "row")
    
    $("#content form")
        .css("margin", "0 10px 0 0")
});
