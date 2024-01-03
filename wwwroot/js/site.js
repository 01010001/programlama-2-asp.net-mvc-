var slider = document.getElementById('rating');
var output = document.getElementById('ratingOutput');

slider.addEventListener('input', function() {
    output.textContent = this.value;
});
