$(document).ready(function() {
    // This will fire when document is ready:
    $(window).resize(function() {
        // This will fire each time the window is resized:
        if($(window).width() >= 720) {
            // if larger or equal
            $('#boat').show();
            $('#water').show();
        } else {
            // if smalle
            $('#boat').hide();
            $('#water').hide();
            $('#rrr').css({'font-size':'1.2em','text-overflow': 'ellipsis'})
        }
    }).resize(); // This will simulate a resize to trigger the initial run.
    console.log("show executed");
});