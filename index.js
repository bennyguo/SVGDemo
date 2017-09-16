// inject blockly into div #blockly-canvas
Blockly.inject('blockly-canvas',{ toolbox: document.getElementById('toolbox') });

// initialize a Snap in svg #svg-canvas
var s = Snap("#svg-canvas");
// draw a circle
var crap = s.circle(150, 150, 50);
// define some attributes for the circle
crap.attr({
    fill: "#bada55",
    stroke: "#000",
    strokeWidth: 5
});
// a transform function which allows the circle to move in 4 directions
// you could refer to the Snap website for more syntax details
function transform(dir) {
    switch(dir) {
        case 0:
            crap.animate({cy: "-=50"}, 200);
            break;
        case 1:
            crap.animate({cx: "-=50"}, 200);
            break;
        case 2:
            crap.animate({cy: "+=50"}, 200);
            break;
        case 3:
            crap.animate({cx: "+=50"}, 200);
            break;
    }
}
// bind keydown listener to listen to keyboard event 
$(document).keydown(function(e) {
    // use e.which to get key code
    switch(e.which) {
        case 87:
            transform(0);
            break;
        case 65:
            transform(1);
            break;
        case 83:
            transform(2);
            break;
        case 68:
            transform(3);
            break;
        default:
            break;
    }
});