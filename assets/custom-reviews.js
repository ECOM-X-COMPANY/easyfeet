document.addEventListener("DOMContentLoaded", function() {
    const slidesContainer = document.querySelector('.slides-container');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    let slideIndex = 0;
    const numSlides = document.querySelectorAll('.slide').length;
    const slideWidth = document.querySelector('.slide').offsetWidth;
    const numVisibleSlides = 4; 

    function scrollToSlide(index) {
        slidesContainer.style.transform = `translateX(-${index * slideWidth}px)`;
        slideIndex = index;
    }

    function prevSlide() {
        if (slideIndex > 0) {
            slideIndex--;
            scrollToSlide(slideIndex);
        }
    }

    function nextSlide() {
        if (slideIndex < numSlides - numVisibleSlides) {
            slideIndex++;
            scrollToSlide(slideIndex);
        }
    }

    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
});