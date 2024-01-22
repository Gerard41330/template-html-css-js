function flipCard() {
    var card = document.getElementById('card');
    card.classList.toggle('is-flipped');
}


document.addEventListener('DOMContentLoaded', function () {
    const images = Array.from(document.querySelectorAll('.carousel-image'));
    let currentIndex = 0;

    function rotateCarousel() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }

    setInterval(rotateCarousel, 2000); // Change image every 2 seconds

    function flipCard() {
        var card = document.getElementById('card');
        card.classList.toggle('is-flipped');
    }

    var maDiv = document.querySelector('.scrollable-div');

    if (maDiv) {
        maDiv.addEventListener('click', function (e) {
            var rect = e.target.getBoundingClientRect();
            var y = e.clientY - rect.top;

            if (y < rect.height / 2) {
                maDiv.scrollTop -= 100;
            } else {
                maDiv.scrollTop += 100;
            }
        });
    }
});