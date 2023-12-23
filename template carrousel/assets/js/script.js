window.addEventListener('DOMContentLoaded', (event) => {
    const images = Array.from(document.querySelectorAll('.carousel-image'));
    let currentIndex = 0;

    function rotateCarousel() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }

    setInterval(rotateCarousel, 2000); // Change image every 2 seconds
});
