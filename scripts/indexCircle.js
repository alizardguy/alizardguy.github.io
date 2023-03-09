var circle = document.getElementById('circle');
document.addEventListener('mousemove', function(e) {
    if (circle.style.visibility = 'visible'){
    circle.style.top = e.pageY + 'px';
    circle.style.left = e.pageX + 'px';
    }
    else{
    circle.style.top = 0;
    circle.style.left = 0;
    }
});