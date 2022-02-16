const circle = document.getElementById('circle')

circle.addEventListener('mouseenter', function()  {
if (!circle.classList.contains('Thesheriff')) {
    circle.classList.add('Thesheriff');
}
});

circle.addEventListener('mouseleave' , function() {
    if (circle.classList.contains('Thesheriff')){
        circle.classList.remove('Thesheriff');
    }
});