var circle = document.getElementById('circle');
let width = screen.width;
document.addEventListener('mousemove', function(e) {
    if (screen.width > 600){
    circle.style.top = e.pageY + 'px';
    circle.style.left = e.pageX + 'px';
    circle.visibility = "visible";
    }
    else{
    circle.style.top = 0;
    circle.style.left = 0;
    circle.visibility = "hidden";
    }
});