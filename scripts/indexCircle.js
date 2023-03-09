var circle = document.getElementById('circle');
document.addEventListener('mousemove', function(e) {
    circle.style.top = e.pageY + 'px';
    circle.style.left = e.pageX + 'px';
});