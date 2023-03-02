// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

//Functiona to be called onmouseover and onmouseout to change the color of "Hello World"
function newColor() {
    document.getElementById("hello_world").style.color = "blue";
}

function oldColor() {
    document.getElementById("hello_world").style.color = "darkolivegreen";
}

//Square animation//

var id = null;
function myMove() {
    var elem = document.getElementById("myAnimation");
    var pos = 0;
    clearInterval(id);
    id = setInterval(frame, 10);
    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}