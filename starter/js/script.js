window.onload = function() {
    if (window.jQuery) {  
        // jQuery is loaded  
        console.log("Just so you know, jQuery is loaded");
    } else {
        // jQuery is not loaded
        console.log("jQuery is not loaded :(");
    }
}