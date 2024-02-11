document.addEventListener('DOMContentLoaded', function () {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const carouselSlide = document.querySelector('.carousel-slide');

    let imageIndex = 0;

    prevBtn.addEventListener('click', () => {
        if (imageIndex > 0) {
            imageIndex--;
        } else {
            imageIndex = carouselSlide.children.length - 1;
        }
        updateCarousel();
        updateButtonStates();
    });

    nextBtn.addEventListener('click', () => {
        if (imageIndex < carouselSlide.children.length - 1) {
            imageIndex++;
        }
        updateCarousel();
        updateButtonStates();
    });

    function updateCarousel() {
        const translateX = -imageIndex * 100;
        carouselSlide.style.transform = `translateX(${translateX}%)`;
    }

    function updateButtonStates() {
        if (imageIndex === 0) {
            prevBtn.disabled = true;
        } else {
            prevBtn.disabled = false;
        }

        if (imageIndex === carouselSlide.children.length - 1) {
            nextBtn.disabled = true;
        } else {
            nextBtn.disabled = false;
        }
    }

    // Initial button states
    updateButtonStates();
});
